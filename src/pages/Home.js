import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSelected } from "../api/queries";
import Dropdown from "../components/Globals/Dropdown";
import { options, label } from "../components/Globals/Dropdown/dropdata";
import Discover from "./content/Discover";
import Popular from "./content/Popular";
import Search from "./content/Search";
import SearchBar from "../components/Globals/SearchBar";
import useDebounce from "../hooks/useDebounce";

function Home() {
  const [selectParams, setSelectParams] = useSearchParams();
  const selectedItem = selectParams.get("selected") || "";
  const navigate = useNavigate();
  const handleSelect = (option, e) => {
    setSelectParams({ selected: option.label });
  };

  const { isLoading, data } = useQuery(["selectData", selectParams], async () =>
    fetchSelected(selectParams)
  );

  console.log(selectedItem);
  console.log(data);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("query") || "";
  const handleChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchValue}`);
  };

  return (
    <>
      <Dropdown
        primary
        options={options}
        selected={selectedItem}
        label={label}
        onChange={handleSelect}
      />
      <SearchBar
        handleChange={handleChange}
        value={searchValue}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      <Popular />
      <Discover />
    </>
  );
}

export default Home;
