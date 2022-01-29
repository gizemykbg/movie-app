import React from "react";
import { CardWrapper, Images, Text } from "./CastCard.styles";

const basePath = "https://image.tmdb.org/t/p/w780";

const RecoCard = ({ item }) => {
  return (
    <CardWrapper>
      <Images src={`${basePath}${item.backdrop_path}`} alt="img" />
      <Text>
        <h5>{item.title}</h5>
      </Text>
    </CardWrapper>
  );
};

export default RecoCard;
