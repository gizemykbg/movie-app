import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SearchBar from "../../components/SearchBar";
import useDebounce from "../../hooks/useDebounce";
import { fetchSearch } from "../../api/queries";
import MovieCard from "../../components/MovieCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import Spinners from "../../components/Spinners";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("query") || "";

  const handleChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const debounceText = useDebounce(searchValue, 1000);
  const { isLoading, data } = useQuery(["searchData", debounceText], async () =>
    fetchSearch(debounceText)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(data);
  console.log(searchValue);
  return (
    <>
      <SearchBar
        handleChange={handleChange}
        value={searchValue}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      {isLoading ? (
        <Spinners />
      ) : (
        <div>
          {data?.results?.map((item) => (
            <MovieCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
