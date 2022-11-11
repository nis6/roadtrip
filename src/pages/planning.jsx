import "./planning.css";
import svgs from "../assets";
import Destination from "../components/destination";
import SearchForm from "../components/search_dest";
import { useState } from "react";
import Logo from "../components/logo";

export default function Planning() {
  const [locations, setlocations] = useState([]);

  const add_location = (location) => {
    //it's a regex looking for a line start (^), followed by zero or more whitespace (\s*) characters, followed by a line end ($).
    if (!location.name || /^\s*$/.test(location.name)) {
      return;
    }
    const newlocations = [...locations, location];
    setlocations(newlocations);
    console.log(newlocations);
  };

  const remove_location = (id) => {
    const removedLocations = [...locations].filter((location) => location.id !== id);
    setlocations(removedLocations);
  };

  return (
    <div className="planning-container">
      <div className="planning-board">
        <div className="planning-board-header">
          <h1>Create a new Trip</h1>
        </div>
        <div className="planning-board-cards">
          {locations.map(({ id, name }) => (
            <Destination
              key={id}
              image={svgs.udaipur}
              remove_location={remove_location}
              id={id}
              name={name}
            />
          ))}
        </div>
      </div>
      <div className="maps-board">
        <Logo />
        <h1>Pick and add your destinations</h1>
        <SearchForm onSubmit={add_location} />
        <img src={svgs.destination} alt="" />
      </div>
    </div>
  );
}
