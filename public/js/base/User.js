// This is a core of the Module

var User = new Class({
	Implements: [Options],
	options: {
		name: '',
		age: -1
	},
	initialize: function(options) {
		this.setOptions(options);
		this.name = this.options.name;
	},
	// print: function {},
});

// check to see if you are running inside of node.js and export if you are
if (typeof exports != "undefined") {
    exports.User = User;
}

