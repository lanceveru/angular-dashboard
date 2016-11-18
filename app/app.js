define(['angularAMD', 'angular-route'], function(angularAMD) {

	'use strict';

	var app = angular.module('webapp', ['ngRoute']);

    

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', angularAMD.route({
				templateUrl: 'app/components/page/home/homeView.html',
				controller: 'homeController',
				controllerUrl: 'app/components/page/home/homeController.js',
				title: 'Home',
                description: 'Homepage',
                keywords: 'home'
			}))
			.when('/settings', angularAMD.route({
				templateUrl: 'app/components/page/settings/settingsView.html',
				controller: 'settingsController',
				controllerUrl: 'app/components/page/settings/settingsController.js',
				title: 'Settings',
                description: 'settings page',
                keywords: 'settings'
			}))
			.when('/profile', angularAMD.route({
				templateUrl: 'app/components/page/profile/profileView.html',
				controller: 'settingsController',
				controllerUrl: 'app/components/page/profile/profileController.js',
				title: 'Profile',
                description: 'profile page',
                keywords: 'profile'
			}))
			
			.otherwise({redirecTo: '/'});

	}]);
    

	// bind a function to routeChangeSuccess
    app.run(['$rootScope', '$location', '$timeout', function ($rootScope, $location, $timeout) {

        
        // for meta tags
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $rootScope.description = current.$$route.description;
            $rootScope.keywords = current.$$route.keywords;
        });

        
    }]);


    // factories
    app.factory('menuFactory', function($http) {
       var factory = {};

       factory.getItems = function () {
        return  $http.get('json/list.json');  
       };

       return factory;
    });
    

    // controllers
    app.controller('mainmenuController',
        ['$scope', '$routeParams', '$http', 'menuFactory', function ($scope, $routeParams, $http, menuFactory) {

            menuFactory.getItems().then(function(response){
                var staticmainmenu = response.data;
                // use StaticMainMenu from json file
                $scope.lists = staticmainmenu.StaticMainMenu;
            });
    }]);
    

    // directives
    app.directive('sidebarList', function() {
        return {
            templateUrl: 'app/shared/sidebar.tpl.html'
        };
    });


	angularAMD.bootstrap(app);
	return app;

});