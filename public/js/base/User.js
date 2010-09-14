// This is a core of the Module

var User = new Class({
	initialize: function(name, age) {
		this.name = name;
		this.age = age || -1;
	},
	isValid: function() {
		if (!this.isNameValid()) return false;
		return true;
	},
	isNameValid: function() {
		return this.name.match('^[a-zA-Z ]+$');
	}
});

// check to see if you are running inside of node.js and export if you are
if (typeof exports != "undefined") {
    exports.User = User;
}

