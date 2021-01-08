const moment = require('moment');

function createMessage(username, text){
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = createMessage;