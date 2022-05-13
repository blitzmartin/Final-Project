import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import { UserContext } from "../App";
import { useContext } from "react";
import Burger from './Burger'
import Hidden from '@mui/material/Hidden'

export default function Header() {

  const { auth } = useContext(UserContext);
  return (
    <nav>
      <NavLink className="logoContainer" to="/home"><img className="logo" src="./images/inkwell-logo.png" alt="logo" /><h2>InkWellness</h2></NavLink>
      <Hidden smDown>
      <ul className="nav-bar">
        <li key="home">
          <NavLink to="/about">About</NavLink>
        </li>
        {auth === true
          ? <>
            <li key="home">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li key="newpost">
              <NavLink to="/newpost">New post</NavLink>
            </li>
            <li key="Logout"><Logout /></li>
          </>
          : <li key="login"><NavLink to="/">Login</NavLink></li>
        }
      </ul>
      </Hidden>
      <Hidden smUp>
        <Burger />
      </Hidden>
    </nav>
  )
}
