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

function Home() {
  const { pathname } = useLocation();
  const [selectParams, setSelectParams] = useSearchParams();
  const selectedItem = selectParams.get("selected") || "";

  const handleSelect = (option, e) => {
    setSelectParams({ selected: option.label });
  };

  const { isLoading, data } = useQuery(["selectData", selectParams], async () =>
    fetchSelected(selectParams)
  );

  console.log(selectedItem);
  console.log(data);
  return (
    <>
      <Dropdown
        primary
        options={options}
        selected={selectedItem}
        label={label}
        onChange={handleSelect}
      />
      <Search />
      <Popular />
      <Discover />
    </>
  );
}

export default Home;
