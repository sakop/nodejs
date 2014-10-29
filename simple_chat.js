var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};

channel.on('join',function(id,client){
	console.log(id + " is in here");
	this.clients[id] = client;
	this.on('broadcast',id,id + 'is in');
});

channel.on('broadcast',function(id,message){
	for(i in channel.clients){
		if(i != id){
			console.log('write message')
			this.client[i].write(message);
		}
	}
});

var count = 0;

var server = net.createServer(function(socket){
	var id = count++;
	console.log('user ' + id);
	socket.on('connect',function(){
		console.log('in connect');
		channel.emit('join',id,socket);
	});
	socket.on('data',function(data){
		console.log('in data');
		channel.emit('broadcast',id,data.toString());
	});
});

server.listen(8888);