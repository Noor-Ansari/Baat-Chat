import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FiX, FiCircle } from "react-icons/fi";

function InfoBar({ roomName, userName }) {
  const history = useHistory();
  return (
    <MainBar>
      <LeftPart>
        <OnLineIcon />
        <Title>{roomName}</Title>
      </LeftPart>
      <RightPart>
        <Title>{userName}</Title>
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

const BarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftPart = styled(BarSection)`
  width: 10rem;
`;

const RightPart = styled(BarSection)`
  width: 8rem;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 1.2rem;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OnLineIcon = styled(FiCircle)`
  background-color: yellow;
  border-radius: 50%;
  border: none;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
`;
