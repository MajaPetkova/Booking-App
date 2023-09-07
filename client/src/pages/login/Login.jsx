import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { useContext, useState } from "react";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { user, loading, error, dispatch } = useContext(AuthContext);


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

     }catch(err){
       dispatch({type:"LOGIN_FAILURE", payload: err.response.data}) 
     }
  }
     console.log(user)
  return (
    <div className="login">
      <div className="loginContainer">
        <input type="text" className="loginInput" placeholder="username" id="username" onChange={handleChange}/>
        <input type="password" className="loginInput" placeholder="password" id="password" onChange={handleChange}/>
        <button className="loginBtn" onClick={handleClick}>Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};
