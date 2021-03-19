import React from "react";
import { Spec } from "../types/general";

type MyState = {
  query: string;
  species: Spec[];
};

class SpecSearch extends React.Component<Spec, MyState> {
  state: MyState = {
    query: "",
    species: [],
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      query: newValue,
    });

    this.search(newValue);
  };

  search = (query: string) => {
    const url = `https://swapi.dev/api/species?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ species: data.results });
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
        {this.state.species.map((spec) => (
          <ul key={spec.name}>
            <div className="card_info">
              <div className="spec_title">{spec.name}</div>
              <div className="species_language">Language: {spec.language}</div>
              <div className="species_classification">
                Classification: {spec.classification}
              </div>
              <div className="species_average">
                Averge lifespan: {spec.average_lifespan}
              </div>
              <div className="species_eye">Eye colors: {spec.eye_colors}</div>
              <div className="species_hair">
                Hair colors: {spec.hair_colors}
              </div>
            </div>
          </ul>
        ))}
      </form>
    );
  }
}

export default SpecSearch;
