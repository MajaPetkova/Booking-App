import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { GoLocation } from "react-icons/go";
import "./hotel.css";
import { MailList } from "../../components/mail-list/MailList";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegWindowClose } from "react-icons/fa";

export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openImg, setOpenImg] = useState(false);
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
    {
      src: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpenImg(true);
  };
  const closeSlider = () => {
    setOpenImg(false);
  };
  const handleMove = (direction) => {
    let newSlideIndex;
    if (direction === "l") {
      newSlideIndex = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideIndex = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideIndex)
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openImg && (
          <div className="slider">
            <FaRegWindowClose className="closeBtn" onClick={closeSlider} />
            <FaArrowLeft className="arrowBtn" onClick={() => handleMove("l")} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="hotelImg" />
            </div>
            <FaArrowRight
              className="arrowBtn"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="book">Reserve or Book Now!</button>
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
            {photos.map((x, i) => {
              return (
                <div className="hotelImgWrapper">
                  <img
                    src={x.src}
                    alt=""
                    className="hotelImg"
                    onClick={() => handleOpen(i)}
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h2 className="hotelTitle">Stay in the heart of New York</h2>
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
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the heart of new York, Location is excellent with
                score od 9.8!
              </span>
              <h3>
                <b>$945</b>(9 Nights)
              </h3>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};
