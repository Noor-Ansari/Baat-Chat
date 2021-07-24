const { addUser, getUser, removeUser } = require("./userUtils");

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const PORT = 5000;

io.on("connection", (socket) => {
  socket.on("join", ({ userName, roomName }, callback) => {
    const { error, user } = addUser({ id: socket.id, userName, roomName });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.userName}, welcome to the ${user.roomName}`,
    });

    socket.broadcast
      .to(user.roomName)
      .emit("message", { user: "admin", text: `${user.userName} has joined.` });
    socket.join(user.roomName);
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.roomName).emit("message", {
      user: user.userName,
      text: message,
    });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.roomName).emit("message", {
        user: "admin",
        text: `${user.userName} has left the room.`,
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
