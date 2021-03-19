import React from "react";
import { Movie } from "../types/general";

type MyState = {
  query: string;
  movies: Movie[];
};

class MovieSearch extends React.Component<Movie, MyState> {
  state: MyState = {
    query: "",
    movies: [],
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      query: newValue,
    });

    this.search(newValue);
  };

  search = (query: string) => {
    const url = `https://swapi.dev/api/films?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ movies: data.results });
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="searchbox-input"
          placeholder="start typing..."
          onChange={this.onChange}
        />
        {this.state.movies.map((movie) => (
          <ul key={movie.title}>
            <div className="card_info">
              <div className="movie_title">{movie.title}</div>
              <div className="movie_release">
                Release date: {movie.release_date}
              </div>
              <div className="movie_director">Director: {movie.director}</div>
              <div className="movie_producer">Producer: {movie.producer}</div>
              <div className="movie_plot">{movie.opening_crawl}</div>
            </div>
          </ul>
        ))}
      </form>
    );
  }
}

export default MovieSearch;
