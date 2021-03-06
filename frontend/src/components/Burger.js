import * as React from 'react';

import { UserContext } from "../App";
import { useContext } from "react";
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  backgroundColor: 'whitesmoke',
  color: "#282c34"
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  backgroundColor: 'whitesmoke',
  color: "#282c34",
}))

export default function PersistentDrawerRight() {

  const { auth } = useContext(UserContext);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} style={{ fontFamily: 'Playfair Display', fontWeight: "bold"}} component="div"><NavLink to="/home">InkWellness</NavLink>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key="about" disablePadding>
            <ListItemButton style={{ fontSize: "2rem"}}>
              <NavLink to="/about">About</NavLink>
            </ListItemButton>
          </ListItem>
          {auth === true
          ?<>
          <ListItem key="home" disablePadding>
            <ListItemButton style={{ fontSize: "2rem"}}>
              <NavLink to="/home">Home</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key="newpost" disablePadding>
            <ListItemButton style={{ fontSize: "2rem"}}>
              <NavLink to="/newpost">New Post</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key="logout" disablePadding>
            <ListItemButton style={{ fontSize: "2rem"}}>
              <NavLink to="/logout"><Logout /></NavLink>
            </ListItemButton>
          </ListItem>
          </>
          :<ListItem key="login" disablePadding>
            <ListItemButton style={{ fontSize: "2rem"}}>
              <NavLink to="/">Login</NavLink>
            </ListItemButton>
          </ListItem>
           }
        </List>
      </Drawer>
    </Box>
  );
}
