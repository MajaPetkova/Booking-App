import "./header.css";
import { FaBed, FaPlane, FaCar, FaTaxi, FaBuilding } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FaBuilding />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
         <p className="headerDescription">Get rewarded for your travels - unlock instant savings of 10% and more with a free Booking account</p>
         <button className="headerBtn">Sign In / Register</button>
      </div>
    </div>
  );
};
