import React from "react";
import styled from "styled-components";

function Message({ message: { user, text }, name }) {
  let isSentByCurrentUser = name === user;

  return isSentByCurrentUser ? (
    <MessageContainerRight>
      <UserName>You</UserName>
      <MessageBox>
        <MessageText>{text}</MessageText>
      </MessageBox>
    </MessageContainerRight>
  ) : user === "admin" ? (
    <MessageContainerCenter>
      <MessageBox>
        <MessageText>{text}</MessageText>
      </MessageBox>
    </MessageContainerCenter>
  ) : (
    <MessageContainerLeft>
      <MessageBox>
        <MessageText>{text}</MessageText>
      </MessageBox>
      <UserName>{user}</UserName>
    </MessageContainerLeft>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MessageContainerCenter = styled(MessageContainer)`
  justify-content: center;
  div {
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    p {
      font-size: 0.8rem;
    }
  }
`;

const MessageContainerRight = styled(MessageContainer)`
  justify-content: flex-end;
  div {
    border-radius: 1rem 1rem 0 1rem;
  }
`;

const MessageContainerLeft = styled(MessageContainer)`
  justify-content: flex-start;
  div {
    border-radius: 1rem 1rem 1rem 0;
  }
`;

const UserName = styled.h1`
  max-width: 5rem;
  font-size: 0.8rem;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageBox = styled.div`
  background-color: #dadbff;
  padding: 1rem;
  margin: 1rem;
  max-width: 50%;
`;

const MessageText = styled.p`
  font-family: cursive;
  word-wrap: break-word;
`;
