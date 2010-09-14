require.paths.push('/Users/piotrzalewa/Projects/Node/App');
var http = require('http');

require('libs/MooTools').apply(GLOBAL);

var Controller = require('libs/Controller').Controller;

http.createServer(function (req, res) {	
	new Controller(req, res).run();
}).listen(8093, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8093/');
