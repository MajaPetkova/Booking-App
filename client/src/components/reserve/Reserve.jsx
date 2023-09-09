import { FaWindowClose} from "react-icons/fa";
import "./reserve.css"
import { useFetch } from "../../hooks/useFetch";


export const Reserve = ({setOpen, hotelId }) => {
    const {data, loading, error} = useFetch(`http://localhost:5000/api/hotels/room/${hotelId}`)
    return (
        <div className="reserve">
            <div className="resContainer">
            <FaWindowClose className="resClose" onClick={()=>{setOpen(false)}}/>
            <span>Select your rooms:
            </span>
                {data.map((item) => 
                <div className="resItem">
                    <div className="itemInfo">
                        <div className="resTitle">{item.title}</div>
                        <div className="resDesc">{item.desc}</div>
                        <div className="maxPeople">Max People: <b>{item.maxPeople}</b></div>
                    <div className="resPrice">{item.price}</div>
                    </div>
                       {item.roomNumbers.map(roomNumber =>(
                    <div className="room">
                        <label>{roomNumber.number}</label>
                        <input type="select" value={roomNumber._id}></input>
                    </div>
                       ) )}
                </div>
                )}
            </div>
        </div>
    )
};
