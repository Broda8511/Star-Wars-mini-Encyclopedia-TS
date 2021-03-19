import React from "react";
import { Starship } from "../types/general";

type MyState = {
  query: string;
  starships: Starship[];
};

class StarshipSearch extends React.Component<Starship, MyState> {
  state: MyState = {
    query: "",
    starships: [],
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      query: newValue,
    });

    this.search(newValue);
  };

  search = (query: string) => {
    const url = `https://swapi.dev/api/starships?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ starships: data.results });
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
        {this.state.starships.map((starship) => (
          <ul key={starship.name}>
            <div className="card_info">
              <div className="starship_title">{starship.name}</div>
              <div className="starship_length">
                Total length: {starship.length}
              </div>
              <div className="starship_cargo">
                Cargo capacity: {starship.cargo_capacity}
              </div>
              <div className="starship_consumables">
                Consumables: {starship.consumables}
              </div>
              <div className="starship_crew">Crew: {starship.crew}</div>
              <div className="starship_passengers">
                No. of passengers: {starship.passengers}
              </div>
              <div className="starship_manufacturer">
                Manufacturer: {starship.manufacturer}
              </div>
            </div>
          </ul>
        ))}
      </form>
    );
  }
}

export default StarshipSearch;
