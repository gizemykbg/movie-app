import React from "react";
import { Cast, CastGrid, Heading } from "./Casts.styles";
import CastCard from "./CastCard";

const Casts = ({ item }) => {
  return (
    <Cast>
      <Heading>Cast</Heading>
      <CastGrid>
        {item.credits?.cast?.map((item, index) => {
          return item.profile_path && index < 20 && <CastCard item={item} />;
        })}
      </CastGrid>
    </Cast>
  );
};

export default Casts;
