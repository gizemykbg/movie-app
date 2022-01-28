import React from "react";
import { useQuery } from "react-query";
import { fetchPopular } from "../../api/queries";
import Slider from "../../components/Slider";
import Spinners from "../../components/Spinners";

function Popular() {
  const { isLoading, data } = useQuery("popular", fetchPopular);

  return (
    <>
      <div>nanannananan</div>
      {isLoading ? (
        <Spinners />
      ) : (
        <Slider item={data?.results} title="Popular" />
      )}
    </>
  );
}

export default Popular;
