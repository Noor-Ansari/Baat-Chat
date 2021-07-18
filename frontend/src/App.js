import React, { useState } from "react";
import "./App.css";
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";
let socket = socketClient(SERVER);
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
const name = prompt("Enter your name");
socket.emit("new-user-joined", name);
function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // socket.on("user-joined", (userName) => {
  //   console.log(userName);
  // });
  socket.on("recieve message", (messageData) => {
    console.log(messageData);
    setMessages((prevState) => [...prevState, messageData]);
  });

  socket.on("user-joined", (data) => {
    console.log(data);
  });

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send message", inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <ul>
        {messages.map((item, idx) => (
          <li key={idx}>{item.message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <div>
          <input
            name="message-input"
            id="message-input"
            placeholder="Send message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default App;
