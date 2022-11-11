import { FiArrowRight } from "react-icons/fi";
import svgs from "../assets";
import { Link } from "react-router-dom";
import Logo from "./logo";

const HomePanel = () => {
  return (
    <div className="home-panel">
      <Logo />
      <div className="start">
        <h1>Have stories to tell not stuff to show.</h1>
        <p>Plan your trip now!</p>
        <div className="plan-image">
          <img src={svgs.trip} alt="destination on map" />
        </div>

        <Link to="/plan" className="links">
          <button className="start-button">
            <p style={{ margin: "0 0.3rem" }}>Start</p>
            <span>
              <FiArrowRight size="1.2rem" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePanel;
