import * as React from "react";
import styled, { keyframes } from "styled-components";
import Container from "../components/Container";
import Title from "../components/Title";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTitle = styled(Title)`
  margin: 2.5rem;
`;

const StyledDiv = styled.div`
  &::before {
    content: "<form>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    top: 1rem;
    left: 1rem;
    font-weight: 400;
  }
  margin: 2rem;
  &::after {
    content: "<form/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.2rem;
    top: calc(100vh - 3rem);
    left: 1rem;
    font-weight: 400;
  }
`;

const StyledForm = styled.form`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4rem 4rem 10rem 5rem;
`;

const StyledInput = styled.input`
  color: #8d8d8d;
  background: #2b2b2b;
  border: none;
  margin: 0.5rem;
  padding: 1rem;
`;

const NameInput = styled(StyledInput)`
  grid-column: 1 / 1;
  grid-row: 1/1;
`;
const EmailInput = styled(StyledInput)`
  grid-column: 2 / 2;
  grid-row: 1/1;
`;
const SubjectInput = styled(StyledInput)`
  grid-column: 1 / 3;
  grid-row: 2/2;
`;

const MessageInput = styled(StyledInput)`
  grid-column: 1 / 3;
  grid-row: 3/3;
`;

const grow = keyframes`
  0%{ transform: scale(1);}
  50%{ transform: scale(1.02);}
  100%{ transform: scale(1);}
`;

const StyledButton = styled.button`
  background: #2b2b2b;
  border: 2px solid #72e0d1;
  color: #72e0d1;
  font-size: large;
  grid-column: 2/3;
  grid-row: 4/4;
  margin: 0.5rem;
  &:hover {
    background: #72e0d1;
    color: #2b2b2b;
    animation: ${grow} 1s infinite;
  }
`;

const ContactPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>Say hi!</StyledTitle>
      <StyledDiv>
        <StyledForm
          action="https://getform.io/f/d064dd33-73a3-47f3-a75e-4b0e34f06e9a"
          method="POST"
        >
          <NameInput type="text" name="name" id="name" placeholder="Name" />
          <EmailInput type="text" name="email" id="email" placeholder="Email" />
          <SubjectInput
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <MessageInput
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <StyledButton type="submit"> Send Message!</StyledButton>
        </StyledForm>
      </StyledDiv>
    </StyledContainer>
  );
};

export default ContactPage;
