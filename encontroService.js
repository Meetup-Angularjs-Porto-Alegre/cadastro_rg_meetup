angular.module('AngularRG').service('encontroService', function($firebaseArray){


	var ref = new Firebase("https://glowing-fire-237.firebaseio.com/encontros");

	this.encontros = $firebaseArray(ref);

	var prepareEncontro = function(encontro) {
		// var data = new Date( encontro.data ).getDate();
		return {
			name: encontro.name,
			// data: encontro.data
			data: moment(encontro.data).format('MM/DD/YYYY')
		};
	};

	this.add = function(encontro) {
		this.encontros.$add(prepareEncontro(encontro));
		this.encontro = {};	
	};

	this.delete = function(encontro) {
		this.encontros.$remove(prepareEncontro(encontro));
	};

	this.edit = function(encontro) {
		encontro.editable = true;
		this.old.name = encontro.name;
		this.old.data = encontro.data;
	};

	this.cancel = function(encontro) {
		encontro.editable = false;
		encontro.name = this.old.name;
		encontro.data = this.old.data;
	};

	this.save = function(encontro) {
		this.encontros.$save(prepareEncontro(encontro));
		encontro.editable = false;
	}

});