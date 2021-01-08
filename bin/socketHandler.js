const createMessage = require('./message');

const serverName = 'Server';

function socketHandler() {
  console.log('new user has connected');

  //client initial connection
  socket.on('username', ({ username }) => {
    console.log('added user to list');
    const users = userJoin(socket.id, username);

    io.emit('message', createMessage(serverName, username+' has joined the chatroom'));
    io.emit('activeUser', users);
  })

  //client sends message
  socket.on('clientMessage', ({ name, text }) => {
    console.log(text);
    io.emit('message', createMessage(name, text));
  })

  //client disconnets
  socket.on('disconnect', () => {
    console.log('A user has logged off');

    const { user, users } = userLeave(socket.id);

    console.log(user);

    io.emit('message', createMessage(serverName, user.username+' has left the chatroom'));
    io.emit('activeUser', users);
  })
}

module.exports = socketHandler;