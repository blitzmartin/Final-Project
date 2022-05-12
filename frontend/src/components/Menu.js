import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import { UserContext } from "../App";
import { useContext } from "react";
import React, { useState } from 'react'
import Hidden from '@mui/material/Hidden'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'
import { Divider } from '@mui/material';
import { FaChevronRight } from 'react-icons/fa';


export default function Menu() {

    const { auth } = useContext(UserContext);
const [open, toggleDrawer ] = useState(false);

    return (
        <nav>

            <NavLink className="logoContainer" to="/home"><img className="logo" src="./images/inkwell-logo.png" alt="logo" /><Hidden smDown><h2>InkWell</h2></Hidden></NavLink>
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
                <IconButton>
                    <MenuIcon onClick={toggleDrawer(true)}/>
                </IconButton>
            </Hidden>
            <Drawer
               anchor="right"
               open={open}
               onClose={toggleDrawer(false)}
                >
                <div >
                    <IconButton>
                        <FaChevronRight />
                    </IconButton>
                </div>
                <Divider />
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
            </Drawer>
        </nav>
    )
}
