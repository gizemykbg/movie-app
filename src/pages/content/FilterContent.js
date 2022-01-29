import React from "react";
import { useLocation } from "react-router-dom";

function FilterPage() {
  const { pathname } = useLocation();
  const route = pathname.includes("popular") ? "popular" : "top_rated";
  return <div></div>;
}

export default FilterPage;
