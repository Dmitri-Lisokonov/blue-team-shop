import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import './Navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Navbar = () => {

    return (
        <AppBar position="static" className="nav-bar">
            <div className="nav-flex">
                <Router>
                    <Button href="/shop" className="shop button">Shop</Button>
                    <Button href="/login" className="login button">Login</Button>
                    <Button href="/admin" className="admin button">Admin</Button>
                    <Button href="/register" className="register button">Register</Button>
                </Router>
            </div>
        </AppBar>
    )
}

export default Navbar;