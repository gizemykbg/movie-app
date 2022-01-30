import React from "react";

import MovieCard from "../Cards/MovieCard";
import { Scrollable, CBox, ScrollTitle } from "./SliderSc";

function Slider({ item, title, onClick }) {
  return (
    <div>
      <ScrollTitle>{title}</ScrollTitle>
      <Scrollable dir="ltr">
        {item.map((item) => (
          <CBox key={item.id}>
            <MovieCard item={item} onClick={onClick} />
          </CBox>
        ))}
      </Scrollable>
    </div>
  );
}

export default Slider;
