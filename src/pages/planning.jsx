import "./planning.css";
import svgs from "../assets";
import React from "react";
import Destination from "../components/destination";
import DestinationForm from "../components/destination_form";
import Logo from "../components/logo";

class Planning extends React.Component {
  constructor() {
    super();
    this.state = { locations: [] };
  }

  componentDidMount() {
    var Locations = JSON.parse(localStorage.getItem("locations"));
    if (Locations) {
      this.setState({ locations: Locations });
    } else {
      localStorage.setItem("locations", JSON.stringify(this.state.locations));
    }
  }

  //ALWAYS use arrow functions here, because this function is passed as a prop to another component
  // and inside another component context changes hence "this" might be undefined or something else
  add_location = (location) => {
    //it's a regex looking for a line start (^), followed by zero or more whitespace (\s*) characters, followed by a line end ($).
    if (!location.name || /^\s*$/.test(location.name)) {
      return;
    }
    const newlocations = [...this.state.locations, location];

    console.log("This is the input location: ", this.state.locations);
    localStorage.setItem("locations", JSON.stringify(newlocations));
    this.setState({ locations: newlocations });
    console.log("This is the location just added: ", this.state.locations);
    console.log(newlocations);
  };

  remove_location = (id) => {
    const removedLocations = [...this.state.locations].filter(
      (location) => location.id !== id
    );
    localStorage.setItem("locations", JSON.stringify(removedLocations));
    this.setState({ locations: removedLocations });
  };

  render() {
    return (
      <div className="planning-container">
        <div className="planning-board">
          <div className="planning-board-header">
            <h1>Create a new Trip</h1>
          </div>
          <div className="planning-board-cards">
            {this.state.locations.map(({ id, name, date, time }) => (
              <Destination
                key={id}
                image={svgs.udaipur}
                remove_location={this.remove_location}
                id={id}
                name={name}
                date={date}
                time={time}
              />
            ))}
          </div>
        </div>

        <div className="maps-board">
          <Logo />
          <h1>Pick and add your destinations</h1>
          <DestinationForm onSubmit={this.add_location} />
          <img className="map-img" src={svgs.destination} alt="" />
        </div>
      </div>
    );
  }
}

export default Planning;

/*
Planning the parent component passes a function as a prop to the form components, this function
allows children components (Form components) to change state of parent comp and thus communicating
back to parent component
*/
