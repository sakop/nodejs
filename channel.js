var EventEmitter = require('events').EventEmitter;

var channel = new EventEmitter();
channel.on('join',function(){
	console.log('join is called');
});

channel.emit('join');