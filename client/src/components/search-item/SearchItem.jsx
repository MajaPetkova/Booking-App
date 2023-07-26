import "./searchItem.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        alt="hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Hotel</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span className="siSubtitle">Room Apartment with Air Conditioning</span>
        <span className="siFeatures">
          Entire Apartment - 1 Bathroom 28m2 - 1 Full Bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckBtn">See availability</button>
        </div>
      </div>
    </div>
  );
};
