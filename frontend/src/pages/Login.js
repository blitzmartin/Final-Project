import '../Login.css'
import { useState } from "react"

export default function Login() {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })
    function handleChange(){

    }

    function handleClick(){

    }

    return (
        <>
            <div className="loginContainer">
                <div className="loginTitleDiv"><h2>Please enter your credentials to login:</h2></div>
                <input type='text' name="username" placeholder='Username' onChange={handleChange} value={userData.username} />
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
                <button onClick={handleClick}>Login</button>
            </div>
        </>
    )
}