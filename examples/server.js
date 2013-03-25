var connect = require('connect');
var server  = connect.createServer();
var port    = process.env.PORT || 9797;

server.use(connect.static(__dirname+"/../"));

server.listen(port);

console.log('Accepting connections on port ' + port + '...');
