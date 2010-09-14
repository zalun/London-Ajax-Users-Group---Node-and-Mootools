exports.Response = new Class({
	initialize: function(response) {
		this.response = response;
	},
	endText: function(text) {
		this.response.writeHead(200, {'Content-Type': 'text/plain'});
		this.response.end(text);
	},
	endHtml: function(html) {
		this.response.writeHead(200, {'Content-Type': 'text/html'});
		this.response.end(html);
	},
	renderHtml: function(result) {
		template = "<!DOCTYPE html>\n"+"<html>" +"<head>\n"+"<title>{title}</title>\n"+"</head>\n"+"<body>{body}</body>\n"+"</html>";
		return template.substitute(result);
	},
	returnHtml: function(result) {
		this.endHtml(this.renderHtml(result));
	}
});
