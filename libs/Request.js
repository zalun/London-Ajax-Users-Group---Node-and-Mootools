exports.Request = new Class({
	initialize: function(request) {
		this.response = request;
		this.url = require('url').parse(request.url, true);
	}
});

