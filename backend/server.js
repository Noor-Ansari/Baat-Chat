const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});
const PORT = 8080;
const users = {};

io.on("connection", (socket) => {
    
  socket.on("new-user-joined", (userName) => {
    console.log("username", userName);
    users[socket.id] = userName;
    socket.broadcast.emit("user-joined", userName);
  });

  socket.on("send message", (message) => {
    socket.broadcast.emit("recieve message", {
      message,
      userName: users[socket.id],
    });
  });

  socket.on("disconnect", () => {
    console.log(`${users[socket.id]} left the chat.`);
    delete users[socket.id];
  });

});

http.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
