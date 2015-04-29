'use strict';

angular.module('AngularRG').controller('encontrosController', ['$scope', 'encontroService', '$firebaseObject', function($scope, encontroService, $firebaseObject){
	$scope.editable = false;
	
	$scope.encontros = encontroService.encontros;
	$scope.encontro = encontroService.encontro;
	
	$scope.add = encontroService.add;

	$scope.old = {};
	$scope.encontro = { name: '', data: '', editable: false };
	
	$scope.delete = encontroService.delete;

	$scope.edit = encontroService.edit;
	
	$scope.cancel = encontroService.cancel;

	$scope.save = encontroService.save;


}]);