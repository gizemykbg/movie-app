import React from "react";
import MovieCard from "../MovieCard";
import { Scrollable, Box, ScrollTitle } from "./SliderSc";

function Slider({ item, title }) {
  function handleBookmark() {
    console.log("hello");
  }
  function handleFavorites() {
    console.log("hello");
  }
  return (
    <div>
      <ScrollTitle>{title}</ScrollTitle>
      <Scrollable dir="ltr">
        {item.map((item) => (
          <Box key={item.id}>
            <MovieCard
              item={item}
              handleBookmarks={handleBookmark}
              handleFavorites={handleFavorites}
            />
          </Box>
        ))}
      </Scrollable>
    </div>
  );
}

export default Slider;
