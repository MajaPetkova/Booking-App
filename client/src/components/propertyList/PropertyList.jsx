import { useFetch } from "../../hooks/useFetch";
import "./propertyList.css";

export const Propertylist = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hotels/countByType");
  
  const images = [
    "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  ];
  return (
    <div className="propertyList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data &&
            images.map((x, i) => (
              <div className="pItem" key={i}>
                <img src={x} alt="" className="pListImg" />
                <div className="pListTitles">
                   <h1>{data[i]?.type}</h1>
               <h2> {data[i]?.count} {data[i]?.type}</h2> 
                </div>
              </div>) )}
        </>
      )}
    </div>
  );
};
