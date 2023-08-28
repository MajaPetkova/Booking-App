import { useFetch } from "../../hooks/useFetch";
import "./featured.css";

export const Featured = () => {

  const {data, loading, error} = useFetch("http://localhost:5000/api/hotels/countByCity?cities=berlin,Barcelona,Bitola")
  console.log(data)

  return <div className="featured">
    <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW1zdGVyZGFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Amsterdam</h1>  
          <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Paris</h1>  
          <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1572202378710-71d8b1cce96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm90dGVyZGFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Rotterdam</h1>  
          <h2>123 properties</h2>
        </div>
    </div>
     </div>;
};
