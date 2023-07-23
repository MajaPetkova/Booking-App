import "./header.css";
import { useState } from "react";
import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaBuilding,
  FaCalendarDay,
  FaChild,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });
  const handleOption =(name, operation)=>{
    setOptions((prev) =>{
        return {
            ...prev, 
            [name]:operation === "i" ? options[name] + 1 : options[name]-1
        }
    })
  }

  return (
    <div className="header">
      <div className={type === "list" ?"headerContainer listMode" :"headerContainer"}>
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
        { type !== "list" &&
        <>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDescription">
          Get rewarded for your travels - unlock instant savings of 10% and more
          with a free Booking account
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FaCalendarDay className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FaChild className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.rooms} rooms `}</span>
            {openOptions && <div className="options" >
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionBox">
                <button disabled={options.adult <= 0} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionBox">
                <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionBox">
                <button disabled={options.rooms <= 0} className="optionCounterButton" onClick={()=>handleOption("rooms", "d")}>-</button>
                <span className="optionCounterNumber">{options.rooms}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("rooms", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};
