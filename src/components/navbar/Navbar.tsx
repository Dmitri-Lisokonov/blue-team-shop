import { AppBar, Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import './Navbar.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ShopContext } from '../../context/ShopContext';
import { User } from '../../models/User';
import { ObjectConverter } from '../../services/ObjectConverter';
import { UserHttpClient } from '../../services/UserHttpClient';


const Navbar = () => {
    const { user, setUser, userfetched } = useContext(ShopContext);
    const converter = new ObjectConverter();
    const userClient = new UserHttpClient();

    const logout = () => {
        localStorage.removeItem('user');
        setUser({} as User);
    }

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user != null) {
            const userString = JSON.parse(user);
            setUser(converter.jsonToUser(userString));
        }
    }, [userfetched])

    useEffect(() => {
        try {
            const json = localStorage.getItem('user');
            if (json) {
                const user = JSON.parse(json);
                userClient.checkSession(user['Token'])
                    .then((res: any) => {
                        try {
                            if (res['status'] !== 0) {
                                localStorage.removeItem('user');
                            }
                        }
                        catch (err) {
                            localStorage.removeItem('user');
                        }

                    })
            }
        }
        catch (err) {
            console.error(err);
        }
    }, [])

    return (
        <AppBar position="static" className="nav-bar">
            <div className="nav-flex">
                <Router>
                    <Button href="/shop" className="shop button">Shop</Button>
                    {
                        !user.token ?
                            <>
                                <Button href="/login" className="login button">Login</Button>
                                <Button href="/register" className="register button">Register</Button>
                            </>
                            :
                            null
                    }
                    {
                        user.token ?
                            <>
                                <Button href="/dashboard" className="dashboard button">{user.name}</Button>
                                <Button className="dashboard button" onClick={logout}>Log Out</Button>
                            </>
                            :
                            null
                    }
                    {
                        user.role && user.role === "admin" ? <Button href="/admin" className="admin button">Admin</Button>
                            :
                            null
                    }
                </Router>
            </div>
        </AppBar>
    )
}

export default Navbar;