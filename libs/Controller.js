var Response = require('libs/Response').Response;
var Request = require('libs/Request').Request;

exports.Controller = new Class({
	initialize: function(req, res) {
		this.request = new Request(req);
		this.response = new Response(res);
		this.name = this.request.url.pathname.split('/',2)[1] || 'helloworld';
		// TODO: try/catch for 404 errors
		this.controller = require('controllers/'+ this.name +'.js');
	},
	run: function() {
		this.controller.getResponse.bind(this)();
	}
})
