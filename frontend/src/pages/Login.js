import '../Login.css'
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const { setUser, setAuth } = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setUserData((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value
        };
      }
    });
  }

  function handleClick() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password
      })
    };
    fetch("/auth/login", requestOptions)
      .then(res => {
        if (res.status === 200) {
          setAuth(true);
          setUser(userData.username)
          navigate('/home', { replace: true });
        }
        setUserData({
          username: "",
          password: ""
        });
      });
  }

  return (
    <>
      <div className="loginContainer">
        <div className="loginTitleDiv"><h2>Please enter your credentials to login:</h2></div>
        <input className="loginInput" type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
        <input className="loginInput" type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
        <button className="loginBtn" onClick={handleClick}>Login</button>
        <div><Link to="/register">Not a member? Register here</Link></div>
      </div>
    </>
  )
}