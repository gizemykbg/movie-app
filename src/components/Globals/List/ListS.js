import React, { useEffect, useState } from "react";
import { ListCWrapper } from "./List.styles";
import MovieCard from "../Cards/MovieCard";
import Pagination from "@mui/material/Pagination";

const ListS = ({ item }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minIndex, setMinIndex] = useState();
  const [maxIndex, setMaxIndex] = useState();
  const [data, setData] = useState();
  const pageSize = 4;

  const handleChangePage = (e, value) => {
    setCurrentPage(value);
    setMinIndex((value - 1) * pageSize);
    setMaxIndex(value * pageSize);
  };

  useEffect(() => {
    setMinIndex(0);
    setMaxIndex(pageSize);
    setCurrentPage(1);
    setData(item);
  }, [item]);

  return (
    <>
      <ListCWrapper>
        {data?.map(
          (item, index) =>
            index > minIndex &&
            index < maxIndex && (
              <div key={item.id}>
                <MovieCard item={item} />
              </div>
            )
        )}
      </ListCWrapper>
      {data?.length > 0 ? (
        <Pagination
          page={currentPage}
          onChange={handleChangePage}
          count={data?.length / pageSize < 1 ? 1 : data?.length / pageSize}
          rowsPerPage={pageSize}
          color="primary"
          sx={{ marginY: 3, marginX: "auto", paddingLeft: "40%" }}
        />
      ) : (
        <h4>Movie Not Found....</h4>
      )}
    </>
  );
};

export default ListS;
