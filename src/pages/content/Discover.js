import React from "react";
import { useQuery } from "react-query";
import { fetchDiscover } from "../../api/queries";

import Slider from "../../components/Globals/Slider";
import Spinners from "../../components/Base/Spinners";

function Discover() {
  const { isLoading, data } = useQuery("discover", fetchDiscover);

  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        <Slider item={data?.results} title="Discover" />
      )}
    </>
  );
}

export default Discover;
