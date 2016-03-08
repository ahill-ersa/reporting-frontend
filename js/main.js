require.config({
  //enforceDefine: true, //This is for IE error handling: http://requirejs.org/docs/api.html#ieloadfail. use define instead of a normal js file
  paths: {
      'angular' : '/lib/angular/angular',
      'ng-csv' : '/lib/ng-csv/build/ng-csv.min',
      'axios' : '/lib/axios/dist/axios.min',
      'lodash': '/lib/lodash/lodash.min',
      'filesize': '/lib/filesize/lib/filesize.min',
      "mathjs": '/lib/mathjs/dist/math.min',
      "moment": '/lib/moment/min/moment.min',
      "numeral": '/lib/numeral/min/numeral.min',
      'qs': '/node_modules/qs/dist/qs'
  },
  shim: {
      angular: {
          exports : 'angular'
      },
      "ng-csv": { deps: ['angular'], exports: "ng-csv" }
  },
  baseUrl: '/js'
});

//TODO: May have seperated dev and production main.js files or gulp it?
require(["debug-settings"], function(d) {
    for (var attr in d) {
        if (d.hasOwnProperty(attr)) sessionStorage[attr] = d[attr];
        }
    }, function (err) {
        console.log("Cannot load settings, skip set up debug session.");
});

define("app", ["client"], function(client) {
    var app = angular.module("reportingApp", ["ngSanitize", "ui.router", "ui.bootstrap"]);
    app.factory("reporting", ["$timeout", client]);
    // app.controller("CRMController", ["$scope", "$timeout", "reporting", function($scope, $timeout, reporting) {
    //     console.log("direct alling");
    //     $scope.selectSnapshot = function() { console.log("we are being called");}
    // }]);
    return app;
});

require(["app", "menu", "identity/crm", "hpc/hpc"],
    function (app) {
        require(["route"], function(route) {
            app.config(["$stateProvider", "$urlRouterProvider", route]);
            angular.bootstrap(document, ["reportingApp"]);
        });
    }
);
