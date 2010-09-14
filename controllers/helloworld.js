var User = require("plugins/User").User;

exports.getResponse = function () {
	var result = {title: 'Hello World - Node example for London Ajax User Group'};
	if (this.request.url.query && this.request.url.query.name) {
		var user = new User({name: this.request.url.query.name});
		result.body = '<p>Hello, {name}</p>'.substitute(user);
	} else {
		result.body = ''+
'<form>'+
	'<p>Please provide yor name</p>'+
	'<p>'+
		'<label for="name">name:</label>'+
		'<input type="text" name="name" id="name"/>'+
	'</p>'+
	'<input type="submit"/>'+
'</form>';
	}
	this.response.returnHtml(result);
}
