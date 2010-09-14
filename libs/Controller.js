var path = require("path"),
	Response = require('libs/Response').Response,
	Request = require('libs/Request').Request;

exports.Controller = new Class({
	initialize: function(req, res) {
		this.request = new Request(req);
		this.response = new Response(res);
		this.name = this.request.url.pathname.split('/',2)[1] || 'helloworld';
		// TODO: try/catch for 404 errors
	},
	run: function() {
		filename = 'controllers/'+ this.name +'.js';
		path.exists(path.join(process.cwd(), filename), function(exists) {
			if (!exists) {
				this.response.send404();
				return;
			}
			this.controller = require('controllers/'+ this.name +'.js');
			this.controller.getResponse.bind(this)();
		}.bind(this));
	}
})
