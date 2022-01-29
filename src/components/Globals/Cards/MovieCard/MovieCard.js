import * as React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardStyle from "./MovieCardSc";
import { useDispatch, useSelector } from "react-redux";
import { add_favorites, delete_favorites } from "../../../../redux/favorite";
import { add_watchlist, delete_watchlist } from "../../../../redux/watchlist";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const watchlist = useSelector((state) => state.watchlist);

  function handleClick() {
    navigation(`/movies/:${item.id}`);
  }

  return (
    <CardStyle className="card">
      <div className="card-image" onClick={handleClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt="movie-img"
        />
      </div>
      <div className="card-info">
        <div className="card-title">{item.original_title}</div>
        <div className="card-title">{item.release_date} </div>
        <div className="btn-container">
          {watchlist.watchMovies.find((movie) => movie.id === item.id) ? (
            <button
              className="card-button"
              onClick={() => dispatch(delete_watchlist(item.id))}
            >
              <BookmarkIcon color="black" />
            </button>
          ) : (
            <button
              className="card-button"
              onClick={() =>
                dispatch(
                  add_watchlist(item.id, item.genre, item.original_title)
                )
              }
            >
              <BookmarkIcon />
            </button>
          )}
          {favorites.favoriteMovies.find((movie) => movie.id === item.id) ? (
            <button
              className="card-button"
              onClick={() => dispatch(delete_favorites(item.id))}
            >
              <FavoriteIcon color="red" />
            </button>
          ) : (
            <button
              className="card-button"
              onClick={() =>
                dispatch(
                  add_favorites(item.id, item.genre, item.original_title)
                )
              }
            >
              <FavoriteIcon />
            </button>
          )}
        </div>
      </div>
    </CardStyle>
  );
};

export default MovieCard;
