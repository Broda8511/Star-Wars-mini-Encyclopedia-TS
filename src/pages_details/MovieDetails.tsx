import React from "react";
import { Link } from "react-router-dom";

// type myProps = {
//   title: string;
//   plot: string;
//   producers: string;
// };

const MovieDetails = () => {
  //   console.log(props);
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
