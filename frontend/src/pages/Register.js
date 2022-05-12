import '../Login.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    
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
        fetch("/auth/register", requestOptions)
            .then(res => {
                if (res.status === 200) {
                    navigate('/', { replace: true });
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
                <div className="loginTitleDiv"><h2>Register here:</h2></div>
                <input className="loginInput" type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} required />
                <input className="loginInput" type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} required />
                <button className="loginBtn" onClick={handleClick}>Register</button>
            </div>
        </>
    )
}