import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { GoLocation } from "react-icons/go";
import "./hotel.css";

export const Hotel = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1679678691263-cc7f30ce02f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <GoLocation />
            <span>Elton Str 124, New York </span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((x) => {
              return (
                <div className="hotelImgWrapper">
                  <img src={x.src} alt="" className="hotelImg" />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <p className="hotelDescription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum quis nihil mollitia autem ullam, delectus obcaecati
                assumenda quas iure expedita libero amet veritatis voluptatem
                suscipit fugiat officiis saepe esse rem? Accusantium corrupti
                facilis earum quasi obcaecati id maiores sequi quia molestiae
                quas expedita eligendi cupiditate dolor quis impedit suscipit
                laboriosam tempore animi rerum, quaerat sapiente possimus ad.
                Praesentium ea distinctio quas tempora ipsa mollitia dolorum
                explicabo, veniam fugit porro rerum!
              </p>
            </div>
            <div className="hotelDetailsPrice">
                <h2>Perfect for a 9-night stay!</h2>
                <span>
                    Located in the heart of new York, Location is excellent with score od 9.8!
                </span>
                <h3><b>$945</b>(9 Nights)</h3>
                <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
