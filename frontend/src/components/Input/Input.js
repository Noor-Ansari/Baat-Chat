import React from "react";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";

function Input({ message, setMessage, sendMessages }) {
  return (
    <form onSubmit={sendMessages}>
      <InputContainer>
        <InputControl
        placeholder="Type something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton type="submit">
          <BiSend />
        </SubmitButton>
      </InputContainer>
    </form>
  );
}

export default Input;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 0.1fr;
  column-gap: 0.5rem;
  border: 1erpx solid #444;
  height: 100%;
  background-color: blue;
`;

const InputControl = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
  display: grid;
  place-items: center;
`;
