var http = require('http');
var url = require('url');

function parser (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unix (time) {
	return {unixtime: time.getTime()};
}

var server = http.createServer((req, res) => {
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parser(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unix(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
});

server.listen(process.argv[2]);