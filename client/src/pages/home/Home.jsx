import { Featured } from "../../components/featured/Featured";
import { FeaturedProperties } from "../../components/featured-properties/FeaturedProperties";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { Propertylist } from "../../components/propertyList/PropertyList";

import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <Propertylist/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties/>
      </div>
    </div>
  );
};
