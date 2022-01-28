import React from "react";
import { useQuery } from "react-query";
import { fetchDiscover } from "../../api/queries";

import Slider from "../../components/Slider";
import Spinners from "../../components/Spinners";

function Discover() {
  const { isLoading, data } = useQuery("discover", fetchDiscover);

  return (
    <>
      <div>nanannananan</div>
      {isLoading ? (
        <Spinners />
      ) : (
        <Slider item={data?.results} title="Discover" />
      )}
    </>
  );
}

export default Discover;
