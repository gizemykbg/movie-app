import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchGenre, fetchSelected } from "../api/queries";
import Dropdown from "../components/Globals/Dropdown";
import { options, label } from "../components/Globals/Dropdown/dropdata";
import Discover from "./content/Discover";
import Popular from "./content/Popular";
import SearchBar from "../components/Globals/SearchBar";

import Spinners from "../components/Base/Spinners";
import List from "../components/Globals/List";
import { movieGenres } from "../helpers/helpers";
import FilterCard from "../components/FilterSection/FilterElements/FilterCard";

function Home() {
  // const [selectParams, setSelectParams] = useSearchParams();
  // const selectedItem = selectParams.get("selected") || "";
  const navigation = useNavigate();

  // const handleSelect = (option, e) => {
  //   setSelectParams({ selected: option.label });
  //   navigation(`/filter?${selectedItem}`);
  // };

  // const { isLoading, data } = useQuery(["selectData", selectedItem], async () =>
  //   fetchSelected(selectedItem)
  // );
  // console.log(selectedItem);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("query") || "";
  const handleChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/search?query=${searchValue}`);
  };

  return (
    <>
      {/* <Dropdown
        primary
        options={options}
        selected={selectedItem}
        label={label}
        onChange={handleSelect}
      /> */}
      <SearchBar
        handleChange={handleChange}
        value={searchValue}
        onSubmit={handleSubmit}
      />
      {/* 
      {isLoading ? (
        <Spinners />
      ) : (
        <div>
          <List item={data?.results} />
        </div>
      )}*/}
      <Popular />
      <Discover />
    </>
  );
}

export default Home;
