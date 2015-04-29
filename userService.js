angular.module('AngularRG').service('userService', function($firebaseArray){


	var ref = new Firebase("https://glowing-fire-237.firebaseio.com/users");

	this.users = $firebaseArray(ref);

	var prepareUser = function(user) {
		return {
			name: user.name,
			rg: user.rg
		};
	};

	this.user = {name: "", rg: "", editable: false};
    this.old = {};

	this.add = function() {
		this.users.$add(prepareUser(this.user));
		this.user = {};	
	};

	this.delete = function() {
		this.users.$remove(prepareUser(this.user));
	};

	this.edit = function() {
		this.user.editable = true;
		this.old.name = this.user.name;
		this.old.rg = this.user.rg;
	};

	this.cancel = function() {
		this.user.editable = false;
		this.user.name = this.old.name;
		this.user.rg = this.old.rg;
	};

	this.save = function() {
		this.users.$save(prepareUser(this.user));
		this.user.editable = false;
	}

});