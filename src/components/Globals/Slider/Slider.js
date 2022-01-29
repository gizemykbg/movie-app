import React from "react";

import MovieCard from "../Cards/MovieCard";
import { Scrollable, Box, ScrollTitle } from "./SliderSc";

function Slider({ item, title, onClick }) {
  return (
    <div>
      <ScrollTitle>{title}</ScrollTitle>
      <Scrollable dir="ltr">
        {item.map((item) => (
          <Box key={item.id}>
            <MovieCard item={item} onClick={onClick} />
          </Box>
        ))}
      </Scrollable>
    </div>
  );
}

export default Slider;
