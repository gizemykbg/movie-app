import styled from "styled-components";

const CardWrapper = styled.div`
  width: 140px;
  background-color: var(--background-dark-grey);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  outline: 1px solid var(---font-light-color);
`;
const Images = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;
const Text = styled.div`
  padding: 10px;
  p {
    font-size: 14px;
  }
  p {
    margin-top: 5px;
  }
`;

export { CardWrapper, Text, Images };
