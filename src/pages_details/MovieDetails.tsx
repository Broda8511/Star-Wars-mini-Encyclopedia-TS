import React from "react";
import { Link } from "react-router-dom";


const MovieDetails = () => {
  return (
    <div className="movies-details">
      <div>
        <Link to="/movies">Back</Link>
      </div>
      <h2>Movie title</h2>
      <span>Plot</span>
      <p>producers</p>
    </div>
  );
};

export default MovieDetails;
