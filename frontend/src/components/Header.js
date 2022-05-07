import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
      <h2>📝 My Journal</h2>
      <ul className="nav-bar">
        <li key="home">
          <NavLink to="/">Home</NavLink>
        </li>
        <li key="newpost">
          <NavLink to="/newpost">NewPost</NavLink>
        </li>
      </ul>
    </div>
  )
}
