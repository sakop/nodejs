var net = require('net');

var server = net.createServer(function(socket){
	socket.once('data',function(data){
		console.log(this === socket);
		console.log(data.toString());
		socket.write("hello\n " + data);
	});
});

server.listen(8888);