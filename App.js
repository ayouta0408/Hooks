import React from "react";
import { useState } from "react";
import "./style.css";
import { moviesData } from "./MovieData";
import MovieList from "./MovieList";
import AddMovie from "./addmovie";


function App() {
  const [movies, setMovies] = useState(moviesData);
  console.log(movies,"eyaaaa");

  const addhandler=(newmovie)=>{
    setMovies([...movies,newmovie ])
  }
  return (
    <div className="wrapper">
      <MovieList movies={movies} />
      <AddMovie  addhandler={addhandler}/>
    </div>
  );
}

    export default App; 