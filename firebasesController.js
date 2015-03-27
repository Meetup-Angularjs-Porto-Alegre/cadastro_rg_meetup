'use strict';

var app = angular.module('AngularRG', ['firebase']);

app.controller('firebasesController', ['$scope', function($scope, $firebaseObject){
	var ref = new Firebase("https://glowing-fire237.firebaseio.com")

	$scope.data = $firebaseObject(ref);
	console.log($scope.data)
}]);