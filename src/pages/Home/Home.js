import React from "react";
import { useQuery } from "react-query";
import { fetchDiscover, fetchPopular } from "../../api/queries";

import Slider from "../../components/Slider/Slider";

function Home() {
  const popularData = useQuery("popular", fetchPopular);
  // const discoverData = useQuery("discover", fetchDiscover);
  console.log(popularData);

  return (
    <>
      <Slider item={popularData?.data?.results} title="Popular" />
      {/* <div>
        <Slider item={discoverData?.data?.results} title="Discover" />
      </div> */}
    </>
  );
}

export default Home;
