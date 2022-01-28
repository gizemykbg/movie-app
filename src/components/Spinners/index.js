import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over one second
const Spinners = styled.div`
  display: block;
  animation: ${rotate} 1s linear infinite;

  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #555;
  width: 50px;
  height: 50px;
  margin: auto;
`;

export default Spinners;
