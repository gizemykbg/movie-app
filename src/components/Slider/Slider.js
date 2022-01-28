import React from "react";

import MovieCard from "../MovieCard";
import { Scrollable, Box, ScrollTitle } from "./SliderSc";

function Slider({ item, title }) {
  return (
    <div>
      <ScrollTitle>{title}</ScrollTitle>
      <Scrollable dir="ltr">
        {item.map((item) => (
          <Box key={item.id}>
            <MovieCard item={item} />
          </Box>
        ))}
      </Scrollable>
    </div>
  );
}

export default Slider;
