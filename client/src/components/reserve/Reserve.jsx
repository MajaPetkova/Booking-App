import { FaWindowClose } from "react-icons/fa";
import "./reserve.css";
import { useFetch } from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

export const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotels/room/${hotelId}`
  );
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];

    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);


  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const handleClick = () => {};

  return (
    <div className="reserve">
      <div className="resContainer">
        <FaWindowClose
          className="resClose"
          onClick={() => {
            setOpen(false);
          }}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="resItem">
            <div className="itemInfo">
              <div className="resTitle">{item.title}</div>
              <div className="resDesc">{item.desc}</div>
              <div className="maxPeople">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="resPrice">{item.price}</div>
            </div>
            <div className="resSelectRooms">
            {item.roomNumbers.map((roomNumber) => (
                <div className="room" key={item.roomNumber}>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(roomNumber)}
                  ></input>
              </div>
            ))}
          </div>
        </div>
        ))}
        <button className="resBtn" onClick={handleClick}>
          Reserve Now
        </button>
      </div>
    </div>
    );
};
