import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tables from "../components/Globals/Tables";
import { movieGenres } from "../helpers/helpers";

function Profile() {
  const watchlist = useSelector((state) => state.watchlist);
  const favorites = useSelector((state) => state.favorites);

  const movies = [...watchlist.watchMovies, ...favorites.favoriteMovies].filter(
    (object, index, arr) => {
      return arr.map((item) => item.id).indexOf(object.id) === index;
    }
  );
  const [data, setData] = useState(movies);
  return (
    <div>
      <h2>Favorites & Watchlist</h2>
      <Tables items={data} genres={movieGenres} />
    </div>
  );
}

export default Profile;
