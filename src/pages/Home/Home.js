import React from "react";
import { useQuery } from "react-query";
import { fetchPopular } from "../../api/queries";

function Home() {
  const { isLoading, isError, error, data, isFetched, isFetching, ...query } =
    useQuery("popular", fetchPopular);
  console.log(data, isLoading, isError, error);
  return (
    <>
      <h1>Query Products</h1>

      <ul>
        {data?.data?.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
