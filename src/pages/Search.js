import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import { fetchSearch } from "../api/queries";
import Skeleton from "../components/Skeleton";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

function Search() {
  //   const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/search/${debounceText}`);
  };
  const debounceText = useDebounce(value, 1000);
  const { isLoading, data } = useQuery(["searchData", debounceText], async () =>
    fetchSearch(debounceText)
  );
  console.log(data);
  console.log(value);
  return (
    <>
      <div>nanannananan</div>
      <SearchBar
        handleChange={handleChange}
        value={value}
        setValue={setValue}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      {isLoading ? (
        <Skeleton />
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
