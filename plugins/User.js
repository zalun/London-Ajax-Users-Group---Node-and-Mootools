// This is a Module converted into a plugin

// implement everything which will be needed
	// MooTools
var Moo = require('libs/MooTools'),
	Class = Moo.Class,
	Options = Moo.Options,
	// sys
	sys = require('sys'),
// User module
	User = require('public/js/base/User').User;

User.implement({
	print: function() {
		sys.puts(this.name);
		if (this.age > 0) sys.puts(this.age);
	}
});
exports.User = User;
