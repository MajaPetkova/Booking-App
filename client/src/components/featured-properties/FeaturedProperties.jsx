import "./featuredProperties.css";
import { useFetch } from "../../hooks/useFetch";

export const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hotels?featured=true");
  console.log(data)
  return (
    <div className="fp">
    {loading ? "Loading..." : <>
      {data.map((x)=>(
        <div className="fpItem" key={x._id}>
      <img src={x.photos[0]} alt="" className="fpImage" />
      <span className="fpName">{x.name}</span>
      <span className="fpCity">{x.city}</span>
      <span className="fpPrice">Starting from ${x.cheapestPrice}</span>
      {x.rating && <div className="fpRating">
        <button>{x.rating}</button>
        <span>Excellent</span>
      </div>}
      </div>
      ))}
      </>}
    </div>
  );
};
