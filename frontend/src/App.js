import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';

import { RequireAuth } from './contexts/RequireAuth';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import OnePost from './pages/OnePost'
import NewPost from './pages/NewPost'

export const UserContext = React.createContext();

function App() {
    const [user, setUser] = useState("");
    const [auth, setAuth] = useState(false)
  return (
    <>
      <div className="App">
            <Router>
              <Header />
              <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/home/:id' element={<OnePost />} />
                <Route path='/newpost' element={<NewPost />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </Router>
            <Footer />
    </div>
    </>
  
  );
}

export default App;
