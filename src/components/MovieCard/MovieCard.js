import * as React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardStyle from "./MovieCardSc";

const MovieCard = ({ item, handleBookmarks, handleFavorites }) => {
  return (
    <CardStyle className="card">
      <div className="card-image">
        <img
          height="100"
          width="100"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt="movie-img"
        />
      </div>
      <div className="card-info">
        <div className="card-title">{item.original_title}</div>
        <div className="btn-container">
          <button className="card-button" onClick={handleBookmarks}>
            <BookmarkIcon />
          </button>
          <button className="card-button" onClick={handleFavorites}>
            <FavoriteIcon />
          </button>
        </div>
      </div>
    </CardStyle>
  );
};

export default MovieCard;
