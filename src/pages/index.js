import * as React from "react";
import styled, { keyframes } from "styled-components";
import profilememoji from "../images/profile-memoji.png";
import Container from "../components/Container";
import Title from "../components/Title";

const typing = keyframes`
  from {
    width: 0
  }`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const blink = keyframes`
    50% {
    border-color: transparent
  }`;

const StyledTitle = styled(Title)`
  margin: 1rem 3rem;
  width: 21ch;
  animation: ${typing} 2s steps(22), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
`;
const Subtitle = styled.span`
  &::before {
    content: "<span>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    position: absolute;
    margin-top: -2rem;
    left: 2rem;
  }
  max-width: 55rem;
  color: #eb8b5e;
  margin: 2rem 4rem;
  padding: 0;
  font-weight: 100;
  font-size: x-large;

  &::after {
    content: "<span/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    position: absolute;
    padding-top: 1.5rem;
    left: 2rem;
  }
`;
const StyledImage = styled.img`
  height: 500px;
  width: 500px;
  position: absolute;
  right: 10rem;
`;

// markup
const IndexPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledTitle>Hi there, I'm Nicolás</StyledTitle>
        <Subtitle>
          I'm a <strong>Frontend Developer</strong> based on Colombia and I
          craft awesome things for the Web. I'm glad you're here.
        </Subtitle>
        <StyledImage src={profilememoji} />
      </StyledContainer>
    </>
  );
};

export default IndexPage;
