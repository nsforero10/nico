import * as React from "react";
import styled, { keyframes } from "styled-components";

const grow = keyframes`
  0%{ transform: scale(1);}
  50%{ transform: scale(1.1);}
  100%{ transform: scale(1);}
`;

const Menu = styled.div`
  position: absolute;
  top: 2rem;
  left: 50vh;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #6c538b;
  font-size: larger;
`;
const StyledA = styled.a`
  background-color: #6c538b;
  border-radius: 4px;
  padding: 0.5rem;
  color: #1b1b1b;
  &:hover {
    color: #1b1b1b;
    animation: ${grow} 1s infinite;
  }
`;

const MainMenu = () => {
  return (
    <Menu>
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/skills">Skills</a>
      <a href="/blog">Blog</a>
      <StyledA href="/contact">
        <strong>Say Hello</strong>
      </StyledA>
    </Menu>
  );
};

export default MainMenu;
