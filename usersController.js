'use strict';

angular.module('AngularRG').controller('usersController', ['$scope', 'userService', '$firebaseObject', function($scope, userService, $firebaseObject){
	$scope.editable = false;
	
	$scope.users = userService.users;
	$scope.user = userService.user;
	
	$scope.add = userService.add;
	
	$scope.delete = userService.delete;

	$scope.edit = userService.edit;
	
	$scope.cancel = userService.cancel;

	$scope.save = userService.save;


}]);