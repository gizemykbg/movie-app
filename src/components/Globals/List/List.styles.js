import styled from "styled-components";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;
  margin: 5px;
`;
const ListCWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding-left: 25%;
`;

export { ListWrapper, ListCWrapper };
