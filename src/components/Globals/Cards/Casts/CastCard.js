import React from "react";
import { CardWrapper, Images, Text } from "./CastCard.styles";

const CastCard = ({ item }) => {
  const sizes = ["w92", "w342"];

  const imagePaths = [
    `https://image.tmdb.org/t/p/${sizes[0]}${item.profile_path} ${
      sizes[0].slice(1) + "w"
    }`,
    `https://image.tmdb.org/t/p/${sizes[1]}${item.profile_path} ${
      sizes[1].slice(1) + "w"
    }`,
  ];
  return (
    <CardWrapper>
      <Images srcSet={imagePaths.join(`, `)} alt="cast" />
      <Text>
        <h5 className="actor">{item.name}</h5>
        <p>{item.character}</p>
      </Text>
    </CardWrapper>
  );
};

export default CastCard;
