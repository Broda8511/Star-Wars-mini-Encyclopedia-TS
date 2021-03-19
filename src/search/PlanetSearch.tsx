import React from "react";
import { Planet } from "../types/general";

type MyState = {
  query: string;
  planets: Planet[];
};

class PlanetSearch extends React.Component<Planet, MyState> {
  state: MyState = {
    query: "",
    planets: [],
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      query: newValue,
    });

    this.search(newValue);
  };

  search = (query: string) => {
    const url = `https://swapi.dev/api/planets?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ planets: data.results });
      });
    console.log(url);
    console.log(this.state.planets);
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
        {this.state.planets.map((planet) => (
          <ul key={planet.name}>
            <div className="card_info">
              <div className="planet_title">{planet.name}</div>
              <div className="planet_climate">Climate: {planet.climate}</div>
              <div className="planet_population">
                Population: {planet.population}
              </div>
              <div className="planet_terrain">Terrain: {planet.terrain}</div>
              <div className="planet_diameter">Diameter: {planet.diameter}</div>
              <div className="planet_gravity">Gravity: {planet.gravity}</div>
            </div>
          </ul>
        ))}
      </form>
    );
  }
}

export default PlanetSearch;
