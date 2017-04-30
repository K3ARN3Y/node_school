var http = require('http');
var t2map = require('through2-map');


var server = http.createServer((req, res) => {
	if (req.method !== 'POST') {
		return res.end('send me a POST\n');
	}

	req.pipe(t2map((data) => {
		return data.toString().toUpperCase();
	})).pipe(res);
});

server.listen(process.argv[2]);