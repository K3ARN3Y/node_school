var net = require('net');

var server = net.createServer((socket) => {
	socket.end(time() + '\n');
});

function addZero (i) {
	return (i < 10 ? '0' : '') + i;
}

function time () {
	var date = new Date();
	return date.getFullYear() + '-' +
		addZero(date.getMonth() + 1) + '-' +
		addZero(date.getDate()) + ' ' +
		addZero(date.getHours()) + ':' +
		addZero(date.getMinutes());
}

server.listen(Number(process.argv[2]));