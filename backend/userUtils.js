const users = [];

const normalizeString = (str) => {
  return str.trim().toLowerCase();
};

const addUser = ({ id, userName, roomName }) => {
  userName = normalizeString(userName);
  roomName = normalizeString(roomName);

  const isUserExist = users.findIndex((user) => user.id === id);

  if (isUserExist !== -1) {
    return { error: "User already exist" };
  }

  const user = { id, userName, roomName };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.name === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
