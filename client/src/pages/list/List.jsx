import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import "./list.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/search-item/SearchItem";
import { useFetch } from "../../hooks/useFetch";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch} = useFetch(`http://localhost:5000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`)

  const handleClick =() =>{
    reFetch()
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="city">Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
              <label htmlFor="city">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"  onChange={(e)=>setMin(e.target.value)}/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" onChange={(e)=>setMax(e.target.value)}/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.rooms}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "Loading..." : <>
            {data.map((x)=>(
              <SearchItem x={x} key={x._id}/>
            ))}
            </> }
          </div>
        </div>
      </div>
    </div>
  );
};
