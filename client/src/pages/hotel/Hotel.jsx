import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { GoLocation } from "react-icons/go";
import "./hotel.css";
import { MailList } from "../../components/mail-list/MailList";
import { Footer } from "../../components/footer/Footer";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegWindowClose } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { Reserve } from "../../components/reserve/Reserve";

export const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [openImg, setOpenImg] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotels/find/${id}`
  );
  const { dates, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(options.rooms)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  // const photos = [
  //   {
  //     src: "https://images.unsplash.com/photo-1679678691263-cc7f30ce02f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  //   },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1678297270891-fda2e16796ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  //   },
  // ];
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
    setSlideNumber(newSlideIndex);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotelContainer">
          {openImg && (
            <div className="slider">
              <FaRegWindowClose className="closeBtn" onClick={closeSlider} />
              <FaArrowLeft
                className="arrowBtn"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                {/* <img src={photos[slideNumber].src} alt="hotelImg" /> */}
                <img src={data.photos[slideNumber]} alt="hotelImg" />
              </div>
              <FaArrowRight
                className="arrowBtn"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="book">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <GoLocation />
              <span>{data.address} </span>
            </div>
            <span className="hotelDistance">
              Excellent Location - ${data.distance} from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((x, i) => {
                return (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      src={x}
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
                <h2 className="hotelTitle">{data.title}</h2>
                <p className="hotelDescription">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the heart of new York, Location is excellent with
                  score od 9.8!
                </span>
                <h3>
                  <b>${days * data.cheapestPrice * options.rooms}</b>({days}{" "}
                  Nights)
                </h3>
                <button onClick={handleClick}>Reserve or Book now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MailList />
      <Footer />
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};
