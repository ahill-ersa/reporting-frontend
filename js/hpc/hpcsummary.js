define(
  ["app", "lodash", "../util", "../util2", "options", "services/hpc"],
  function (app, _, utilOld, util, options) {

  app.controller("HPCSummaryController", ["$scope", "$filter", "theConstants", "org", "spinner", "AuthService","HPCService",
    function ($scope, $filter, theConstants, $timeoutorg, spinner, AuthService, HPCService) {
      var orgName = null;
      if (!(AuthService.isAdmin())) {
        orgName = AuthService.getUserOrgName();
      }
      $scope.values = _.values;
      $scope.formatNumber = utilOld.formatNumber;
      $scope.viewDetails = false
      $scope.datepickerOptions = {minMode: 'month'};
      $scope.rangeStart = new Date();
      $scope.rangeEnd = new Date(2017, 7, 31);
      $scope.rangeEndOpen = false;
      $scope.openRangeEnd = function () {
        $scope.rangeEndOpen = true;
      };
      $scope.isSubTotalRow = theConstants.isSubTotalRow;
      $scope.isFilterApplied = theConstants.isFilterApplied
      $scope.orderByNCols = theConstants.orderByNCols
      $scope.orderBy = theConstants.orderByPredicateThenSubTotal

      $scope.load = function () {
        $scope.alerts = [];
        if (util.withinCurrentMonth($scope.rangeEnd)) {
          $scope.alerts.push({msg: options['hpc']['IncompleteMonth']});
        }

        $scope.rangeStart = utilOld.firstDayOfYearAndMonth($scope.rangeEnd);
        $scope.rangeEnd = utilOld.lastDayOfYearAndMonth($scope.rangeEnd);

        var startTs = utilOld.dayStart($scope.rangeStart);
        var endTs = utilOld.dayEnd($scope.rangeEnd);
        spinner.start();
        HPCService.query(startTs, endTs).then(function() {
          $scope.jobCounts = HPCService.getJobCounts(startTs, endTs, orgName);
          $scope.userRollup = HPCService.getUserRollup(startTs, endTs);
          $scope.userRollupErrorData = HPCService.getUserRollupErrorData(startTs, endTs)
          if (orgName) {
            var subTotals = angular.copy(HPCService.getSubTotals(startTs, endTs, orgName));
            $scope.grandTotal = utilOld.spliceOne(subTotals, 'organisation', 'Grand');
            $scope.subTotals = subTotals;
          } else {
            $scope.subTotals = HPCService.getSubTotals(startTs, endTs);
            $scope.grandTotal = HPCService.getGrandTotal(startTs, endTs);
          }
          spinner.stop();
        }, function (reason) {
          spinner.stop();
          throw new Error('Problem getting HPC information: ' + reason);
        });
      };
    }
  ]);
});