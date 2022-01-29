import styled from "styled-components";

const Cast = styled.div`
  width: calc(100% - 260px);
  @media only screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const Heading = styled.h5`
  margin-bottom: 1rem;
`;
const CastGrid = styled.ul`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 1rem;
  overflow-x: auto;
  padding: 1px 1px 1rem;
`;

export { Cast, CastGrid, Heading };
