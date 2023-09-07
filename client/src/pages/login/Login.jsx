import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate= useNavigate()

  const handleChange = (e)=>{
     setCredentials(prev => ({
        ...prev,
        [e.target.id]: e.target.value
     }))
  }
  const handleClick= async(e) =>{
     e.preventDefault();
     dispatch({type: "LOGIN_START"})
     try{
     const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
     dispatch({type: "LOGIN_SUCCESS", payload: res.data})
     navigate("/")
     }catch(err){
       dispatch({type:"LOGIN_FAILURE", payload: err.response.data}) 
     }
  }
   
  return (
    <div className="login">
        <h2>Login</h2>
      <div className="loginContainer">
        <input type="text" className="loginInput" placeholder="username" id="username" onChange={handleChange}/>
        <input type="password" className="loginInput" placeholder="password" id="password" onChange={handleChange}/>
        <button disabled={loading} className="loginBtn" onClick={handleClick}>Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};
