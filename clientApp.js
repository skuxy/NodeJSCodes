// Klijentska aplikacija, salje string na serversku aplikaciju, koja vraca 
//isti string reversed

var net = require('net');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HOST = '127.0.0.1';
var PORT = 6969;


    
    //spaja se i salje promptani string
var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT); 
   rl.question(">", function(linija) { 
    client.write(linija);
    rl.close();
   });
});


client.on('data', function(data) {    
    console.log('Okrenuti string: ' + data);
    client.destroy();    
});

client.on('close', function() {
    console.log('Veza prekinuta');
});
