import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} count={3} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie ? movie.id : ""}`}>
          <div className="card">
            <img
              className="card-image-object"
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path
              }`}
            />

            <div className="card-image-overlay">
              <div className="card-image-title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card-image-runtime">
                {movie ? movie.release_date : ""}
                <span className="card-image-rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fa-solid fa-star" />{" "}
                </span>
              </div>
              <div className="card-image-description">
                {movie ? movie.overview.slice(0, 100) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Cards;
