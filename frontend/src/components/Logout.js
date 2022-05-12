import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from 'react-router-dom'
import '../Form.css';

export default function Logout() {
  const { setUser, setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: ""
    };
    fetch("/auth/logout", requestOptions)
      .then(res => {
        if (res.status === 200) {
          setAuth(false);
          setUser("");
          navigate('/', { replace: true });
        }
      });
  }

  return (
      <button className="logoutBtn" onClick={handleClick}>Logout</button>
  );
}