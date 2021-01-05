const users = [];

function userJoin(id, username){
  const user = {id, username};

  users.push(user);

  return users;
}

function userLeave(id){
  const index = users.findIndex(user => user.id === id);

  console.log(users);
  console.log(id);
  console.log('index is '+ index);

  if(index !== -1){
    return  {user:users.splice(index, 1)[0], users};
  }
}

module.exports = {
  userJoin,
  userLeave
};