// Klijentska aplikacija, salje string na serversku aplikaciju, koja vraca 
//isti string reversed

var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;


    
    //spaja se i salje promptani string
var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT); 
   client.write('Chupko <3');
});


client.on('data', function(data) {    
    console.log('Okrenuti string: ' + data);
    client.destroy();    
});

client.on('close', function() {
    console.log('Veza prekinuta');
});
