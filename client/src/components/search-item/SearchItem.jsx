import { Link } from "react-router-dom";
import "./searchItem.css";

export const SearchItem = ({x}) => {
  return (
    <div className="searchItem">
      <img
        src={x.photos[0]}
        alt="hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{x.name}</h1>
        <span className="siDistance">{x.distance}</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span className="siSubtitle">Room Apartment with Air Conditioning</span>
        <span className="siFeatures">
         {x.desc}
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
       {x.rating &&  <div className="siRating">
          <span>Excellent</span>
          <button>{x.rating}</button>
        </div>}
        <div className="siDetailsTexts">
          <span className="siPrice">$ {x.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`http://localhost:3000/hotel/${x._id}`}>
          <button className="siCheckBtn">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
