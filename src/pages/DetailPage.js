import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchDetails } from "../api/queries";
import DetailCard from "../components/Globals/Cards/DetailCard";
import Spinners from "../components/Base/Spinners";

function DetailPage() {
  const { pathname } = useLocation();
  const movieID = pathname.substring(pathname.lastIndexOf(":") + 1);
  console.log(movieID);
  const { data, isLoading } = useQuery(["MovieDetail", movieID], async () =>
    fetchDetails(movieID)
  );
  console.log(data);
  return <>{isLoading ? <Spinners /> : <DetailCard item={data} />}</>;
}

export default DetailPage;
