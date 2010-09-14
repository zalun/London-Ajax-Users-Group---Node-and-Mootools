var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

exports.getResponse = function() {
    var uri = this.request.url.pathname.replace('/media','public');
    var filename = path.join(process.cwd(), uri);
    path.exists(filename, function(exists) {
    	if (!exists) {
			this.response.send404();
			return;
		}
    	fs.readFile(filename, "binary", function(err, file) {
    		if (err) {
				this.response.send500(err)
				return;
			}
			this.response.endFile(file);
    	}.bind(this));
    }.bind(this));
}
