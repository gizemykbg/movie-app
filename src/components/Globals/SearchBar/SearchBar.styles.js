import styled from "styled-components";

const SearchBarWrapper = styled.form`
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  position: relative;
  margin: 10px;
`;

const IconImage = styled.span`
  height: 20px;
  padding-right: 20px;
  color: var(--secondary-color);
`;

const Input = styled.input`
  background-color: var(--border-color);
  border-radius: 8px;
  border: none;
  outline: none;
  flex: 1;
  color: var(--my-font-color);
`;
const RightSide = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding-right: 10px;
  color: var(--secondary-color);
`;
const Spinner = styled.div`
  border: 2px solid red;
  border-top: 2px solid var(--font-ligt-color);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { SearchBarWrapper, Input, Spinner, RightSide, IconImage };
