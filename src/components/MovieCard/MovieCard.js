import * as React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = ({ item, handleBookmarks, handleFavorites }) => {
  return (
    <Card
      sx={{
        width: {
          xs: 100, // theme.breakpoints.up('xs')
          md: 250, // theme.breakpoints.up('md')
        },
      }}
    >
      <image
        height="100"
        width="100"
        src={item.backdrop_path}
        alt="movie-img"
      />
      <CardContent>
        <Typography variant="body2">{item.original_title}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorites}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleBookmarks}>
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
