import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cards from "./cards";
import "./movieList.css";
export default function MovieList() {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    const url = `https://api.themoviedb.org/3/movie/${
      type ? type : "popular"
    }?language=en-US&page=1`;
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
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="movieList-container">
      <h1>{type ? type.toUpperCase() : "POPULAR"}</h1>
      <div className="card-container">
        {movies.map((movies) => (
          <Cards movie={movies} />
        ))}
      </div>
    </div>
  );
}
