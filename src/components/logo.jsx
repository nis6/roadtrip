import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="links">
      <span className="logo">
        <ImLocation />
        TheTrips.com
      </span>
    </Link>
  );
};

export default Logo;
