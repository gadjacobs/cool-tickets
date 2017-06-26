var server = require('http').Server();

var io = require('socket.io')(server);

// var Redis = require('ioredis');

// var redis = new Redis();

// redis.subscribe('coolfm-lagos');

// redis.on('message', function(channel, message) {
//     message = JSON.parse(message);

//     var emit = io.emit('coolfmlagos_CommentMade', message.data);


// });

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('coolfmlagos_CommentMade', function(mydata) {
        console.log(mydata);
    });
});



server.listen(3000, function() {

});