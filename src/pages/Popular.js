import React from "react";
import { useQuery } from "react-query";
import { fetchPopular } from "../api/queries";
import Slider from "../components/Slider";
import Skeleton from "../components/Skeleton";

function Popular() {
  const { isLoading, data } = useQuery("popular", fetchPopular);

  return (
    <>
      <div>nanannananan</div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Slider item={data?.results} title="Popular" />
      )}
    </>
  );
}

export default Popular;
