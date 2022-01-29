import React from "react";
import {
  Showcase,
  Wrapper,
  Backdrop,
  Content,
  Dot,
  Row,
  Genres,
} from "./DetailCard.styles";

import { FiPercent } from "react-icons/fi";
import { formatRuntime, colorPercentage } from "../../../../helpers/helpers";
import { Casts, Recommendations } from "../Casts";

function DetailCard({ item }) {
  return (
    <Wrapper>
      <Showcase>
        <Backdrop
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt="img"
        ></Backdrop>
        <Content>
          <div className="textContent">
            <div className="heading">
              <h1>
                {item.title}
                {item.release_date && (
                  <span>({item.release_date.slice(0, 4)})</span>
                )}
              </h1>
            </div>
            <Row>
              <div className="ratingAndRuntime">
                <div
                  className="voteCircle"
                  style={{
                    border: `3px solid ${
                      item.vote_average
                        ? colorPercentage(item.vote_average / 10)
                        : "#777"
                    }`,
                  }}
                >
                  <p>
                    {item.vote_average
                      ? item.vote_average.toFixed(1) * 10
                      : "NR"}
                  </p>
                  <FiPercent className="percentSymbol" />
                </div>
                {item.runtime ? <Dot></Dot> : ""}
                {item.runtime ? (
                  <p className="runtime">{formatRuntime(item.runtime)}</p>
                ) : (
                  ""
                )}
              </div>
              {item.genres?.length > 0 && <Dot></Dot>}
              <Genres>
                {item.genres?.map(
                  (genre, idx) =>
                    idx < 3 && (
                      <li key={`${genre.name}-${genre.id}`}>
                        {genre.name}
                        {idx === item.genres.length - 1 || idx === 2
                          ? null
                          : ","}
                      </li>
                    )
                )}
              </Genres>
            </Row>
            {item.overview && (
              <div className="overview">
                <h3>Overview</h3>
                <p>{item.overview}</p>
              </div>
            )}
            {/* {trailer && (
              <button
                onClick={() => setShowTrailer(true)}
                className={styles.trailerBtn}
              >
                <BsFillPlayFill />
                <span>Play Trailer</span>
              </button>
            )} */}
          </div>
        </Content>
      </Showcase>
      <Casts item={item} />
      <Recommendations item={item} />
      {/* {showTrailer && (
        <Trailer trailer={trailer} setShowTrailer={setShowTrailer} />
      )} */}
    </Wrapper>
  );
}

export default DetailCard;
