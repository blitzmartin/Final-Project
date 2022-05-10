import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import { UserContext } from "../App";
import { useContext } from "react";

export default function Header() {

  const { auth } = useContext(UserContext);
  return (
    <div className='Header'>
      <NavLink to="/home"><h2>📝 My Journal</h2></NavLink>
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
    </div>
  )
}
