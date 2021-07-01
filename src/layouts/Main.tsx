import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Home from "../pages/Home";
import Movie from "../components/Movie";
import Person from "../components/Person";
import Planet from "../components/Planet";
import Spec from "../components/Spec";
import Starship from "../components/Starship";
import Vehicle from "../components/Vehicle";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/movies" render={() => <Movie />} />
        <Route path="/people" render={() => <Person />} />
        <Route path="/planets" render={() => <Planet />} />
        <Route path="/species" render={() => <Spec />} />
        <Route path="/starships" render={() => <Starship />} />
        <Route path="/vehicles" render={() => <Vehicle />} />
      </Switch>
    </>
  );
}

export default Main;
