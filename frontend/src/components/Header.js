import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
      <NavLink to="/home"><h2>📝 My Journal</h2></NavLink>
      <ul className="nav-bar">
        <li key="home">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li key="newpost">
          <NavLink to="/newpost">New post</NavLink>
        </li>
      </ul>
    </div>
  )
}
