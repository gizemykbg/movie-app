import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tables from "../components/Globals/Tables";
import { movieGenres } from "../helpers/helpers";
import { Form } from "react-bootstrap";
import UserCards from "../components/Globals/Cards/UserCards";

function Profile() {
  const watchlist = useSelector((state) => state.watchlist);
  const favorites = useSelector((state) => state.favorites);

  const movies = [...watchlist.watchMovies, ...favorites.favoriteMovies]
    .filter((object, index, arr) => {
      return arr.map((item) => item.id).indexOf(object.id) === index;
    })
    .sort(function (a, b) {
      return new Date(b.release_date) - new Date(a.release_date);
    });
  const [data, setData] = useState(movies);
  const [sortChosen, setSortChosen] = useState();
  const handleClickSortBy = (e) => {
    setSortChosen(e.target.value);
  };
  useEffect(() => {
    if (sortChosen === "favorites") {
      setData(favorites.favoriteMovies);
    } else if (sortChosen === "watchlist") {
      setData(watchlist.watchMovies);
    } else {
      setData(movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortChosen]);

  return (
    <div>
      <div>
        <UserCards />
      </div>

      <Form className="sort-box-profile">
        <Form.Label for="sort">
          <b>Sort By</b>
        </Form.Label>
        <Form.Control
          as="select"
          name="sort"
          id="sort"
          onClick={handleClickSortBy}
        >
          <option value="releasedate">closets release date</option>
          <option value="favorites">favorites</option>
          <option value="watchlist">watchlist</option>
        </Form.Control>
        Sort chosen = {sortChosen}
      </Form>
      <h2>Favorites & Watchlist</h2>
      <Tables items={data} genres={movieGenres} />
    </div>
  );
}

export default Profile;

/* 
       
      
          <Form>
            <Form.Label for="sort">
              <b>Sort By</b>
            </Form.Label>
            <Form.Control
              as="select"
              name="sort"
              id="sort"
              onClick={handleClickSortBy}
            >
              <option value="closets release date">closets release date</option>
              <option value="favorites">favorites</option>
              <option value="watchlist">watchlist</option>
            </Form.Control>
            Sort chosen = {sortChosen}
          </Form>
      
      */
