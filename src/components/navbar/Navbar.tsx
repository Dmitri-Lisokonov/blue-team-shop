import { AppBar, Button } from '@mui/material';
import React from 'react';
import './Navbar.css';
import {
    BrowserRouter as Router
} from "react-router-dom";


const Navbar = () => {

    return (
        <AppBar position="static" className="nav-bar">
            <div className="nav-flex">
                <Router>
                    <Button href="/shop" className="shop button">Shop</Button>
                    <Button href="/login" className="login button">Login</Button>
                    <Button href="/dashboard" className="dashboard button">Dashboard</Button>
                    <Button href="/admin" className="admin button">Admin</Button>
                </Router>
            </div>
        </AppBar>
    )
}

export default Navbar;