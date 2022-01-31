import React from "react";
import { useQuery } from "react-query";
import { fetchPopular } from "../../api/queries";
import Slider from "../../components/Globals/Slider";
import Spinners from "../../components/Base/Spinners";

function Popular() {
  const { isLoading, data } = useQuery("popular", fetchPopular);

  const handleClick = () => {};

  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        <Slider item={data?.results} title="Popular" onClick={handleClick} />
      )}
    </>
  );
}

export default Popular;
