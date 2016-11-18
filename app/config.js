requirejs.config({
	baseUrl: 'app',
	paths: {
		'angular': '../bower_components/angular/angular.min',
		'angular-route': '../bower_components/angular-route/angular-route.min',
		'angularAMD': '../bower_components/angularAMD/angularAMD.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': ['angular'],
		'angularAMD': ['angular'],
		'app': ['angular-route', 'angularAMD']
	},
	priority: ['angular'],
	deps: ['app']
});