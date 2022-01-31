import React, { useState } from "react";
import GenreBox from "./GenreBox";
import RatingBox from "./RatingBox";
import SortBox from "./SortBox";
import YearBox from "./YearBox";
import { Button, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { fetchFilteredData } from "../../../api/queries";
import { movieGenres, yearData } from "../../../helpers/helpers";
import { useLocation, useNavigate } from "react-router-dom";
import Spinners from "../../Base/Spinners";
import { List } from "../../Globals/Dropdown/Dropdown.style";

const FilterCard = ({
  sortChosen,
  rateChosen,
  genreChosen,
  yearChosen,
  handleChangeRating,
  handleClickGenre,
  handleClickSearch,
  handleClickSortBy,
  handleClickYear,
  handleReset,
}) => {
  // const [genreChosen, setGenreChosen] = useState([]);
  // const [rateChosen, setRateChosen] = useState(null);
  // const [yearChosen, setYearChosen] = useState(null);
  // const [sortChosen, setSortChosen] = useState(null);
  // const handleClickGenre = (e) => {
  //   if (e.target.checked === true) {
  //     setGenreChosen([...genreChosen, e.target.value]);
  //   } else {
  //     const deleted = genreChosen.indexOf(e.target.value);
  //     genreChosen.splice(deleted, 1);
  //     setGenreChosen((prev) =>
  //       prev.filter((item) => item.id !== e.target.value)
  //     );
  //   }
  // };
  // const handleChangeRating = (e) => {
  //   setRateChosen(e.target.value);
  // };
  // const handleClickYear = (e) => {
  //   setYearChosen(e.target.value);
  // };
  // const handleClickSortBy = (e) => {
  //   setSortChosen(e.target.value);
  // };

  // const handleClickSearch = (e) => {
  //   setRateChosen(rateChosen);
  //   setGenreChosen(genreChosen);
  //   setYearChosen(yearChosen);
  //   setSortChosen(sortChosen);
  // };
  // const handleReset = () => {
  //   setRateChosen();
  //   setGenreChosen();
  //   setYearChosen();
  //   setSortChosen();
  // };

  // console.log(sortChosen, "sort");
  // console.log(genreChosen, "genre");
  // console.log(yearChosen, "year");
  // console.log(rateChosen, "rate");

  // const { isLoading, data } = useQuery(["filteredData"], async () =>
  //   fetchFilteredData(genreChosen, yearChosen, rateChosen, sortChosen)
  // );

  // console.log(data);
  return (
    <div className="filter-sort">
      <Card className="filter-card">
        <Card.Header>Filter</Card.Header>
        <Card.Body>
          <GenreBox
            genres={movieGenres}
            genreChosen={genreChosen}
            handleClickGenre={handleClickGenre}
          />
          <br />
          <RatingBox
            ratingChosen={rateChosen}
            handleChangeRating={handleChangeRating}
          />
          <br />
          <YearBox
            yearData={yearData}
            yearChosen={yearChosen}
            handleClickYear={handleClickYear}
          />
          <br />
          <SortBox
            sortChosen={sortChosen}
            handleClickSortBy={handleClickSortBy}
          />
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};
export default FilterCard;
