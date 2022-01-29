import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { fetchSearch } from "../../api/queries";
import useDebounce from "../../hooks/useDebounce";
import SearchBar from "../../components/Globals/SearchBar";
import Spinners from "../../components/Base/Spinners";
import List from "../../components/Globals/List";

function Search() {
  // const { pathname } = useLocation();
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
          <List item={data?.results} />
        </div>
      )}
    </>
  );
}

export default Search;
