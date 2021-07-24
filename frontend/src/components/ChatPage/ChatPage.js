import React, { useState, useEffect } from "react";
import qs from "qs";
import io from "socket.io-client";
import styled from "styled-components";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;
const ENDPOINT = "localhost:5000";

function ChatPage({ location }) {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const { userName, roomName } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setUserName(userName.toLowerCase());
    setRoomName(roomName.toLowerCase());

    socket = io(ENDPOINT);
    socket.emit("join", { userName, roomName });

    return () => {
      socket.close();
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    const chatArea = document.getElementById("chat-area");
    chatArea.scrollTop = chatArea.scrollHeight;
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <>
      <MainContainer>
        <InfoBar roomName={roomName} userName={userName} />
        <ChatContainer id="chat-area">
          <Messages messages={messages} name={userName} />
        </ChatContainer>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessages={sendMessage}
        />
      </MainContainer>
    </>
  );
}

export default ChatPage;

const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 4rem auto 3rem;
`;

const ChatContainer = styled.div`
  background-color: #f2f2f2;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
