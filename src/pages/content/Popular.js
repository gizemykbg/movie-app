import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchPopular } from "../../api/queries";
import Slider from "../../components/Globals/Slider";
import Spinners from "../../components/Base/Spinners";

function Popular() {
  const [selected, setSelected] = useState("day");

  const { isLoading, data } = useQuery(["popular", selected], async () =>
    fetchPopular(selected)
  );

  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        <div>
          <button
            className="loadmore-button"
            onClick={() => setSelected("day")}
          >
            Today
          </button>
          <button
            className="loadmore-button"
            onClick={() => setSelected("week")}
          >
            Week
          </button>
          <Slider item={data?.results} title="Popular" />
        </div>
      )}
    </>
  );
}

export default Popular;
