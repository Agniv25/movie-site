import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from "../Components/movieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2M5OWExYjJmYTBmODMwYTUzMWE2ODAzMjA1ZDAwOCIsInN1YiI6IjY0OGM3YTVkMDc2Y2U4MDBhZDcyYjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I3yKhUHdnhr2JW1DmmL_yP6ViL7uqWi3h82mWE9spY",
      },
    };

    axios
      .get(url, options)
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="poster-img-container">
              <div className="poster-image">
                <img
                  className="poster-image-actual"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="poster-image-overlay">
                <div className="poster-image-title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="poster-image-runtime">
                  {movie ? movie.release_date : ""}
                  <span className="poster-image-rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fa-solid fa-star" />{" "}
                  </span>
                </div>
                <div className="poster-image-description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
