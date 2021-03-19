import React from "react";
import { Vehicle } from "../types/general";

type MyState = {
  query: string;
  vehicles: Vehicle[];
};

class VehiclesSearch extends React.Component<Vehicle, MyState> {
  state: MyState = {
    query: "",
    vehicles: [],
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      query: newValue,
    });

    this.search(newValue);
  };

  search = (query: string) => {
    const url = `https://swapi.dev/api/vehicles?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ vehicles: data.results });
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
        {this.state.vehicles.map((vehicle) => (
          <ul key={vehicle.name}>
            <div className="card_info">
              <div className="vehicle_title">{vehicle.name}</div>
              <div className="vehicle_model">Model: {vehicle.model}</div>
              <div className="vehicle_length">
                Total length: {vehicle.length}
              </div>
              <div className="vehicle_crew">Crew: {vehicle.crew}</div>
              <div className="vehicle_manufacturer">
                Manufaturer: {vehicle.manufacturer}
              </div>
              <div className="vehicle_passengers">
                No. of passengers: {vehicle.passengers}
              </div>
            </div>
          </ul>
        ))}
      </form>
    );
  }
}

export default VehiclesSearch;
