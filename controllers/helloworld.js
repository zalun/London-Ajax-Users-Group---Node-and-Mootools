var User = require("plugins/User").User;

exports.getResponse = function () {
	var result = {
		title: 'Hello World - Node example for London Ajax User Group',
		models: ['User'],
		body: ''
	};
	if (this.request.url.query && this.request.url.query.name) {
		var user = new User(this.request.url.query.name);
		if (user.isValid()) {
			result.body = '<p>Hello, {name}</p>'.substitute(user);
		} else {
			result.body = '<p>Error. Name is not valid.</p>';
		}
	} 
		result.body += ''+
'<form id="user-form">'+
	'<p>Please provide yor name</p>'+
	'<p>'+
		'<label for="name">name:</label>'+
		'<input type="text" name="name" id="name"/>'+
	'</p>'+
	'<input type="submit"/>'+
'</form>';
	this.response.returnHtml(result);
}
