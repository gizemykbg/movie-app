import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";

import Discover from "./content/Discover";
import Popular from "./content/Popular";
import Search from "./content/Search";
import { options, label } from "../components/Dropdown/dropdata";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSelected } from "../api/queries";

function Home() {
  const navigation = useNavigate();
  const [selectParams, setSelectParams] = useSearchParams();
  const selectedItem = selectParams.get("selected") || "";

  const handleSelect = (option, e) => {
    setSelectParams({ selected: option.label });
    // navigation(`/filter/selected?${selectedItem}`);
  };

  const { isLoading, data } = useQuery(["searchData", selectedItem], async () =>
    fetchSelected(selectedItem)
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
