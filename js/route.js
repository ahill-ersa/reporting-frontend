define(["menu-data"], function(menuAllData) {
    return function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("home", {
            url: "/",
            templateUrl: "template/home.html"
        });
        
        var menuData = menuAllData.portal;
        
        for (var menu in menuData) {
            for (var item in menuData[menu]) {
                var details = menuData[menu][item];

                var name = details[0]; 
                // This is a temporary solution until menu items and the states
                // they represent have been rewirtten.
                if (name == 'nova') continue;
                
                var url = name;
                var template = "template" + name + ".html";
                var controller = details[1] + "Controller"; 
                
                if( name.startsWith('http')) {
                    $stateProvider.state(name,  {onEnter: function ($window) {
                                                    $window.open(url, '_self');
                                                 }
                                                });
                    alert(name);
                }else{
                    $stateProvider.state(name, { url: url, templateUrl: template, controller: controller });
                }
                
            }
        }

        $stateProvider.state('nova', { url: '/nova', template: '<nova></nova>'});
        $stateProvider.state('/storage/hnas/fileSystem', { url: '/storage/hnas/fileSystem', templateUrl: 'template/storage/hnas/fileSystem.html', controller: 'FileSystemController'});
        $stateProvider.state('/storage/hnas/virtualVolume', { url: '/storage/hnas/virtualVolume', templateUrl: 'template/storage/hnas/virtualVolume.html', controller: 'VirtualVolumeController'});

    };
});
