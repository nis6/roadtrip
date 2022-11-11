import React from "react";
//You need to import React as we're gonna use React.Component to create a class component or you ca directly import Component from React
//import { Component } from "react";
import svgs from "../assets";
import "./home.css";
import HomePanel from "../components/home_panel";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero-image">
          <img src={svgs.explore} alt="Through the desert SVG" />
        </div>
        <HomePanel />
      </div>
    );
  }
}
