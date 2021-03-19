import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

type PlanetProps = {
  title?: string;
  props?: any;
  id?: string;
  planet?: [];
};

const PlanetDetails = ({ props, title }: PlanetProps) => {
  const url = `https://swapi.dev/api/planets/`;
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlanet(response.data);
    });
  }, [url]);
  console.log(planet);

  if (planet) {
    return (
      <div className="planets-details">
        DETAILS of some planet {planet}
        <div>
          <Link to="/planets">Back</Link>
        </div>
      </div>
    );
  }

  return <div>Pusto!</div>;
};

export default PlanetDetails;

// import React from "react";
// import { Link } from "react-router-dom";

// type PlanetProps = {
//   title?: string;
// };

// const PlanetDetails = ({ title }: PlanetProps) => {
//   console.log(title);
//   return (
//     <div className="planets-details">
//       <div>
//         <Link to="/planets">Back</Link>
//       </div>
//       DETAILS {title}
//     </div>
//   );
// };

// export default PlanetDetails;
