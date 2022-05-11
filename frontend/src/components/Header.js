import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import { UserContext } from "../App";
import { useContext } from "react";

export default function Header() {

  const { auth } = useContext(UserContext);
  return (
    <nav>
      <NavLink className="logoContainer" to="/home"><img className="logo" src="./images/inkwell.png" /><h2>Ink Drop</h2></NavLink>
      <ul className="nav-bar">
        {auth === true &&
          <>
            <li key="home">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li key="newpost">
              <NavLink to="/newpost">New post</NavLink>
            </li>
            <li key="Logout"><Logout /></li>
          </>
        }
      </ul>
    </nav>
  )
}
