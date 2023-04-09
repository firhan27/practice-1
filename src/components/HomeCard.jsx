import React from "react";
import "../App.css";
import { getMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";

const HomeCard = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };
  const search = (q) => {
    console.log({ q });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h2>Popular Movie</h2>
          <div className="Movie-container">
            <PopularMovieList />
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomeCard;
