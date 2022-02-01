import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchFilteredData } from "../api/queries";
import Spinners from "../components/Base/Spinners";
import FilterCard from "../components/FilterSection/FilterElements/FilterCard";
import List from "../components/Globals/List";

function FilterPage() {
  const [page, setPage] = useState(1);
  const [genreChosen, setGenreChosen] = useState([]);
  const [rateChosen, setRateChosen] = useState();
  const [yearChosen, setYearChosen] = useState();
  const [sortChosen, setSortChosen] = useState();
  const handleClickGenre = (e) => {
    if (e.target.checked === true) {
      setGenreChosen([...genreChosen, e.target.value]);
    } else {
      const deleted = genreChosen.indexOf(e.target.value);
      genreChosen.splice(deleted, 1);
      setGenreChosen((prev) =>
        prev.filter((item) => item.id !== e.target.value)
      );
    }
  };
  const handleChangeRating = (e) => {
    setRateChosen(e.target.value);
  };
  const handleClickYear = (e) => {
    setYearChosen(e.target.value);
  };
  const handleClickSortBy = (e) => {
    setSortChosen(e.target.value);
  };

  const handleClickSearch = (e) => {
    setRateChosen(rateChosen);
    setGenreChosen(genreChosen);
    setYearChosen(yearChosen);
    setSortChosen(sortChosen);
  };
  const handleReset = () => {
    setRateChosen();
    setGenreChosen();
    setYearChosen();
    setSortChosen();
  };

  console.log(sortChosen, "sort");
  console.log(genreChosen, "genre");
  console.log(yearChosen, "year");
  console.log(rateChosen, "rate");

  const { isLoading, data } = useQuery(
    ["filteredData", { genreChosen, yearChosen, sortChosen, rateChosen, page }],
    async () =>
      fetchFilteredData(genreChosen, rateChosen, yearChosen, sortChosen, page)
  );

  console.log(data);

  return (
    <>
      <FilterCard
        yearChosen={yearChosen}
        handleClickYear={handleClickYear}
        genreChosen={genreChosen}
        handleClickGenre={handleClickGenre}
        rateChosen={rateChosen}
        handleChangeRating={handleChangeRating}
        sortChosen={sortChosen}
        handleClickSortBy={handleClickSortBy}
        handleClickSearch={handleClickSearch}
        handleReset={handleReset}
      />
      {isLoading ? (
        <Spinners />
      ) : (
        <div>
          {data?.results?.length > 0 ? (
            <>
              <List item={data?.results} />
              <button
                className="loadmore-button"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                Load More
              </button>
            </>
          ) : (
            <h3>Movie Not Found...</h3>
          )}
        </div>
      )}
    </>
  );
}

export default FilterPage;

// const FilterPage = () => {
//   const { pathname } = useLocation();
//   const selectedItem = pathname.substring(pathname.lastIndexOf("=") + 1);
//   console.log(selectedItem);
//   const [genreChosen, setGenreChosen] = useState([]);
//   const [rateChosen, setRateChosen] = useState();
//   const [yearChosen, setYearChosen] = useState();
//   const [sortChosen, setSortChosen] = useState();
//   const handleClickGenre = (e) => {
//     genreChosen.push(e.target.value);
//     setGenreChosen(genreChosen);
//   };
//   const handleChangeRating = (e) => {
//     setRateChosen(e.target.value);
//   };
//   const handleClickYear = (e) => {
//     setYearChosen(e.target.value);
//   };
//   const handleClickSortBy = (e) => {
//     setSortChosen(e.target.value);
//   };

//   const handleClickSearch = (e) => {
//     setRateChosen(rateChosen);
//     setGenreChosen(genreChosen);
//     setYearChosen(yearChosen);
//     setSortChosen(sortChosen);
//   };
//   const handleReset = () => {
//     setRateChosen();
//     setGenreChosen();
//     setYearChosen();
//     setSortChosen();
//   };

//   console.log(sortChosen, "sort");
//   console.log(genreChosen, "genre");
//   console.log(yearChosen, "year");
//   console.log(rateChosen, "rate");

//   const { isLoading, data } = useQuery(["filteredData"], async () =>
//     fetchFilteredData()
//   );

//   // console.log(data);

//   return (
//     <>
//       <div>Maraba</div>
//       <FilterCard
//       yearChosen={yearChosen}
//       handleClickYear={handleClickYear}
//       genreChosen={genreChosen}
//       handleClickGenre={handleClickGenre}
//       rateChosen={rateChosen}
//       handleChangeRating={handleChangeRating}
//       sortChosen={sortChosen}
//       handleClickSortBy={handleClickSortBy}
//       handleClickSearch={handleClickSearch}
//       handleReset={handleReset}
//       />
//       {isLoading ? (
//         <Spinners />
//       ) : (
//         <div>
//           <List item={data?.results} />
//         </div>
//       )}
//     </>
//   );
// };

// export default FilterPage;
