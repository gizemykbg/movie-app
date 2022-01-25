import React from "react";
import { useQuery } from "react-query";
import { fetchDocumentaries, fetchPopular } from "../../api/queries";
import MovieCard from "../../components/MovieCard";

function Home() {
  const { isLoading, isError, error, data } = useQuery("popular", fetchPopular);

  console.log(data, isLoading, isError, error);

  function handleBookmark() {
    console.log("hello");
  }
  function handleFavorites() {
    console.log("hello");
  }

  return (
    <>
      <h2>dırırırırı</h2>

      {data?.results.map((item) => (
        <MovieCard
          key={item.id}
          item={item}
          handleBookmarks={handleBookmark}
          handleFavorites={handleFavorites}
        />
      ))}
    </>
  );
}

export default Home;
