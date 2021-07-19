import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { FiX, FiCircle } from "react-icons/fi";
function InfoBar({ roomName }) {
  const history = useHistory();
  return (
    <MainBar>
      <LeftPart>
        <OnLinIcon />
        <RoomTitle>{roomName}</RoomTitle>
      </LeftPart>
      <RightPart>
        <CloseButton onClick={() => history.push("/")}>
          <FiX />
        </CloseButton>
      </RightPart>
    </MainBar>
  );
}

export default InfoBar;

const MainBar = styled.div`
  background-color: blue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
`;

const RoomTitle = styled.h1`
  font-family: sans-serif;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const RightPart = styled.div`
  text-align: right;
`;

const OnLinIcon = styled(FiCircle)`
  background-color: yellow;
  border-radius: 50%;
  border: none;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
`;
