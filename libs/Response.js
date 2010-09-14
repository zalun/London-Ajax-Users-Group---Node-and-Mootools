exports.Response = new Class({
	initialize: function(response) {
		this.response = response;
	},
	renderHtml: function(result) {
		var head = '<script type="text/javascript" src="/media/js/lib/mootools-core.js"></script>\n';
		if (result.models) {
			result.models.each(function(model) {
				head += ''+
'<script type="text/javascript" src="/media/js/base/'+model+'.js"></script>\n'+
'<script type="text/javascript" src="/media/js/models/'+model+'.js"></script>\n';
			});
		}
		template = "<!DOCTYPE html>\n"+"<html>" +"<head>\n"+"<title>{title}</title>\n"+head+"</head>\n"+"<body>{body}</body>\n"+"</html>";
		return template.substitute(result);
	},
	returnHtml: function(result) {
		this.endHtml(this.renderHtml(result));
	},
	endText: function(text) {
		this.response.writeHead(200, {'Content-Type': 'text/plain'});
		this.response.end(text);
	},
	endHtml: function(html) {
		this.response.writeHead(200, {'Content-Type': 'text/html'});
		this.response.end(html);
	},
	endFile: function(file) {
		this.response.writeHead(200);
		this.response.end(file, "binary");
	},
	send404: function(err) {
		this.response.writeHead(404, {"Content-Type": "text/plain"});
		this.response.end(err || "404 Not Found\n");
	},
	send500: function(err) {
		this.response.writeHead(500, {"Content-Type": "text/plain"});
		this.response.end(err + "\n" || "Error: 500\n");
	}
});
