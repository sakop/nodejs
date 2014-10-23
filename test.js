var fs = require('fs');
fs.readFile("a.csv",function(er,data){
	console.log(data);
});

var http = require('http');
http.createServer(function(req,resp){
	resp.writeHead(200,{'Content-Type':'text/xml'});
	fs.createReadStream('aa.jpg').pipe(resp);
}).listen(3001);
console.log("the server is running")

var stream = fs.createReadStream("a.csv");

var i = 0;
stream.on('data',function(chunk){
   i++;
   console.log("dsaewqe:" + chunk);
});

stream.on('end',function(){
	console.log("read end");
});

var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);

delete arr[1];
console.log("array is " + arr);
console.log(arr.length);