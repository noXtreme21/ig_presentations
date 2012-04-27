
/**
 * Module dependencies.
 */

var express   = require('express')
  , reqdir    = require('reqdir')
  , app       = express()
  , http      = require('http').createServer(app)
  , routes    = new Object;

io        = require('socket.io').listen(http)
sequelize = require('sequelize');
database  = new sequelize('presentation', 'presentation', 'presentation');

tables = new Object;
reqdir.loadAll(tables, __dirname + '/sequelize');
reqdir.loadAll(routes, __dirname + '/routes');

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/test', routes.post)

io.sockets.on('connection', function(socket) {

});

http.listen(3000);

console.log("Express server listening on port 3000");
