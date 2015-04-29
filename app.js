'use strict';

angular.module('AngularRG', ['firebase', 'ngRoute']).config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'templates/main.html'

	})
	.when('/encontros', {
		templateUrl: 'templates/encontros.html',
		controller: 'encontrosController'
	});
}]);