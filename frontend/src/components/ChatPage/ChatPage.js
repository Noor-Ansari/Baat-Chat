import React, { useState, useEffect } from "react";
import qs from "qs";
import io from "socket.io-client";
import styled from "styled-components";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

let socket;

function ChatPage({ location }) {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ENDPOINT = "localhost:5000";
  console.log(roomName);
  useEffect(() => {
    const { userName, roomName } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setUserName(userName);
    setRoomName(roomName);

    socket = io(ENDPOINT);
    socket.emit("join", { userName, roomName });

    return () => {
      socket.close();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(messages, message);
  return (
    <>
      <MainContainer>
        <InfoBar roomName={roomName} />
        <ChatContainer></ChatContainer>
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
  grid-template-rows: 0.1fr auto 0.1fr;
`;

const ChatContainer = styled.div`
  background-color: #f2f2f2;
`;
