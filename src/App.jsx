import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/home.jsx";
import MovieList from "./Components/movieList.jsx";
import MovieDetail from "./Components/MovieDetail.jsx";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>error page</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
