import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-link">
      <ul className="nav-ul">
        <NavLink to="/home">
          <div className="nav-home">Home</div>
        </NavLink>
        <NavLink to="/movies">
          <div className="nav-movies">Movies</div>
        </NavLink>
        <NavLink to="/people">
          <div className="nav-people">People</div>
        </NavLink>
        <NavLink to="/planets">
          <div className="nav-planets">Planets</div>
        </NavLink>
        <NavLink to="/species">
          <div className="nav-species">Species</div>
        </NavLink>
        <NavLink to="/starships">
          <div className="nav-starships">Starships</div>
        </NavLink>
        <NavLink to="/vehicles">
          <div className="nav-vehicles">Vehicles</div>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
