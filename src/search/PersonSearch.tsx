import React from "react";
import { Person } from "../types/general";

type MyState = {
  query: string;
  people: Person[];
};

class PersonSearch extends React.Component<Person, MyState> {
  state: MyState = {
    query: "",
    people: [],
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    this.setState({
      query: newValue,
    });

    this.search(newValue);
  };

  search = (query: string) => {
    const url = `https://swapi.dev/api/people?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ people: data.results });
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
        {this.state.people.map((person) => (
          <ul key={person.name}>
            <div className="card_info">
              <div className="person_title">
                {person.name} ({person.gender})
              </div>
              <div className="person_birth">
                Birth year: {person.birth_year}
              </div>
              <div className="person_eye">Eye color: {person.eye_color}</div>
              <div className="person_hair">Hair color: {person.hair_color}</div>
              <div className="person_mass">Mass: {person.mass} kg</div>
              <div className="person_height">Height: {person.height} cm</div>
            </div>
          </ul>
        ))}
      </form>
    );
  }
}

export default PersonSearch;
