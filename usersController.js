'use strict';

var app = angular.module('AngularRG', []);

app.controller('usersController', ['$scope', function($scope){
	$scope.users = [];
	$scope.user = {name: "", rg: "", editable: false};
	
	$scope.add = function(){
		if ($scope.users.indexOf($scope.user) == -1) {
			$scope.users.push($scope.user);	
			$scope.user = {};
		} else {
			//edita
			$scope.user = {};	
		}
	}
	$scope.delete = function(user){
		var index = $scope.users.indexOf(user);
		 $scope.users.splice(index,1);
	}
	$scope.edit = function(user){
		user.editable = true;
		user.old_name = user.name;
		user.old_rg = user.rg;
	}
	$scope.cancel = function(user) {
		user.editable = false;
		user.name = user.old_name;
		user.rg = user.old_rg;

	}
	$scope.save = function(user) {
		user.editable = false;
	}


}]);