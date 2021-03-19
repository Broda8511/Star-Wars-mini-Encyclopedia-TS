import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Home from "../pages/Home";
import Movie from "../components/Movie";
// import MovieDetails from "../pages_details/MovieDetails";
import Person from "../components/Person";
// import PersonDetails from "../pages_details/PersonDetails";
import Planet from "../components/Planet";
// import PlanetDetails from "../pages_details/PlanetDetails";
import Spec from "../components/Spec";
// import SpecDetails from "../pages_details/SpecDetails";
import Starship from "../components/Starship";
// import StarshipDetails from "../pages_details/StarshipDetails";
import Vehicle from "../components/Vehicle";
// import VehicleDetails from "../pages_details/VehicleDetails";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/movies" render={() => <Movie />} />
        {/* <Route path="/movie/:id/" render={() => <MovieDetails />} /> */}
        <Route path="/people" render={() => <Person />} />
        {/* <Route path="/person/:id" render={() => <PersonDetails />} /> */}
        <Route path="/planets" render={() => <Planet />} />
        {/* <Route path="/planet/:id" render={() => <PlanetDetails />} /> */}
        <Route path="/species" render={() => <Spec />} />
        {/* <Route path="/spec/:id" render={() => <SpecDetails />} /> */}
        <Route path="/starships" render={() => <Starship />} />
        {/* <Route path="/starship/:id" render={() => <StarshipDetails />} /> */}
        <Route path="/vehicles" render={() => <Vehicle />} />
        {/* <Route path="/vehicle/:id" render={() => <VehicleDetails />} /> */}
      </Switch>
    </>
  );
}

export default Main;
