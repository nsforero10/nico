import styled from "styled-components";

const Title = styled.h1`
  &::before {
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    position: absolute;
    margin-top: -1rem;
    left: 2rem;
    font-weight: 400;
  }

  color: #72e0d1;
  padding: 0;
  font-size: 65px;

  &::after {
    content: "<h1/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    position: absolute;
    padding-top: 5rem;
    left: 2rem;
    font-weight: 400;
  }
`;

export default Title;
