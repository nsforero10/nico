import * as React from "react";
import styled from "styled-components";
import MainMenu from "./MainMenu";

const Cntnr = styled.div`
  &::before {
    content: "<body>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-weight: 400;
  }
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: #1b1b1b;

  &::after {
    content: "<body/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    position: absolute;
    top: calc(100vh - 3rem);
    left: 1rem;
    font-weight: 400;
  }
`;

const Container = ({ className, children }) => {
  return (
    <Cntnr className={className}>
      <MainMenu />
      {children}
    </Cntnr>
  );
};

export default Container;
