import React, { useState } from "react";
import { ListWrapper } from "./List.styles";
import MovieCard from "../Cards/MovieCard";
import Pagination from "@mui/material/Pagination";

const List = ({ item }) => {
  return (
    <>
      <ListWrapper>
        {item.map((item) => (
          <div key={item.id}>
            <MovieCard item={item} />
          </div>
        ))}
      </ListWrapper>
    </>
  );
};

export default List;
