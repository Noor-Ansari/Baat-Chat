import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function JoinPage() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    if (!userName || !room) {
      e.preventDefault();
    }
  };

  return (
    <MainContainer>
      <PageTitle>Welcome to Baat-Chat</PageTitle>
      <FormContainer>
        <form>
          <FormItem>
            <InputLabel>UserName :</InputLabel>
            <InputControl />
          </FormItem>
          <FormItem>
            <InputLabel>RoomName :</InputLabel>
            <InputControl />
          </FormItem>
          <SubmitButton>Send</SubmitButton>
        </form>
      </FormContainer>
    </MainContainer>
  );
}

export default JoinPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

const PageTitle = styled.h1`
  color: #444;
  margin: 2rem 0;
`;

const FormContainer = styled.div`
  height: 20rem;
  width: 20rem;
  background-color: #444;
  border-radius: 0.25rem;
  padding: 2rem 1rem;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem 0;
  min-height: 5rem;
`;

const InputControl = styled.input`
  border: 1px solid #c2c2c2;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  color: #fff;
`;

const SubmitButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 1rem 0;
`;
