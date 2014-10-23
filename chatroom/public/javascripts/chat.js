var Chat = function(socket){
	this.socket = socket;
};

Chat.prototype.sendMessage = function(roo,text){
	var message = {
		room:room,
		text:text
	};

	this.socket.emit('message',message);
};

Char.prototype.changeRoom = function(room){
	this.socket.emit('join',{
		newRoom:room
	});
};

Char.prototype.processCommand = function(command){
	var words = command.split(' ');
	
};