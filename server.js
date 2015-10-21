//import net;

var net = require('net');
var readline = require('readline');

var stream = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Server = net.createServer(function(c) {
    console.log('client connected');
    c.on('end',function() {
        console.log('client disconnected');
    });
    c.write('OK, spojen si!\r\n');
    c.pipe(c);
    });
   
Server.listen(
        8124,
        function() {
            console.log('server bound');
});
    
    
    
