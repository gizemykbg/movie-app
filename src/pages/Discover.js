import React from "react";
import { useQuery } from "react-query";
import { fetchDiscover } from "../api/queries";
import Skeleton from "../components/Skeleton";
import Slider from "../components/Slider";

function Discover() {
  const { isLoading, data } = useQuery("discover", fetchDiscover);

  return (
    <>
      <div>nanannananan</div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Slider item={data?.results} title="Discover" />
      )}
    </>
  );
}

export default Discover;
