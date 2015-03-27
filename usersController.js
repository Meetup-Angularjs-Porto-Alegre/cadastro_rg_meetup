'use strict';

var app = angular.module('AngularRG', ['firebase']);

app.controller('usersController', ['$scope', 'userService', '$firebaseObject', function($scope, userService, $firebaseObject){
	
	
	$scope.users = userService.users;
	$scope.user = userService.user;
	
	$scope.add = userService.add;
	
	$scope.delete = userService.delete;

	$scope.edit = userService.edit;
	
	$scope.cancel = userService.cancel;

	$scope.save = userService.save;


}]);