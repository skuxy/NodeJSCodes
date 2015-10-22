//serverska aplikacija, prima input preko socketa, i vraca ga okrenutog

var net = require('net');

//host i port
var HOST = '192.168.1.247';
var PORT = 6969;

function reverse(string) {
  var reversedString = '';
  for (var i = string.length - 1; i >= 0; i--)
    reversedString += String.fromCharCode(string[i]);
  return reversedString;
};

net.createServer(function(sock) {
    console.log('IP+Port spojenog klijenta:'+sock.remoteAddress+":"+sock.remotePort);
    
    sock.on('data', function(data) {
        console.log("Primio si: '" + data + "'");
        sock.write(reverse(data));
    });
    
    sock.on('close', function(data) {
        console.log("Veza je prekinuta\n*---------------------------------------------------*");
    });
}).listen(PORT,HOST);

console.log('Slusam na: ' + HOST +':'+ PORT);
