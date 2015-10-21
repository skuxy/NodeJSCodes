var net = require('net');

var client = net.connect({
    host: '192.168.1.247',
    port: 8124
    },
    function() {
        console.log('spojen sam!');
        cleint.write('world!\r\n');
});
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('disconnected from server');
});
    
