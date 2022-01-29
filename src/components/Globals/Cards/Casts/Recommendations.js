import React from "react";
import RecoCard from "./RecoCard";
import styled from "styled-components";

const Recommendations = ({ item }) => {
  let backdropCount = 1;

  return (
    <Rec>
      <Heading>Recommendations</Heading>
      <RecGrid>
        {item.recommendations?.results?.map((item, index) => {
          return (
            item.backdrop_path &&
            backdropCount++ &&
            backdropCount <= 7 && (
              <RecoCard item={item} key={`${item.id}-${item.popularity}`} />
            )
          );
        })}
      </RecGrid>
    </Rec>
  );
};

export default Recommendations;

const Rec = styled.div`
  width: calc(100% - 260px);
  @media only screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
const Heading = styled.h5`
  margin-bottom: 1rem;
`;
const RecGrid = styled.ul`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 1rem;
  overflow-x: auto;
  padding: 1px 1px 1rem;
`;

export { RecGrid, Rec, Heading };
