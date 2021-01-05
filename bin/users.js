const users = [];

function userJoin(id, username){
  const user = {id, username};

  users.push(user);

  return users;
}

function userLeave(id){
  

  return users;
}

module.exports = {
  userJoin,
  userLeave
};