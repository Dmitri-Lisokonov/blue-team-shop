import { Button, Paper } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { User } from '../../models/User';
import './Dashboard.css';

const Dashboard = () => {
    const { user, setUser } = useContext(ShopContext);
    const [alert, setAlert] = useState('');
    let history = useHistory();

    const logout = () => {
        localStorage.removeItem('user')
        setUser({} as User);
        history.push('/shop');
    }

    useEffect(() => {
        const json = localStorage.getItem('user');
        if (!json) {
            setAlert('You are not logged in')
        }
    }, [])

    return (
        <div className="dashboard">
            <Paper className="dashboard-paper">
                {
                    user.email !== undefined ?
                        <div className="dashboard-card">
                            <h1>Dashboard</h1>
                            <div className="dashboard-text">
                                Welcome back, {user.name}
                            </div>
                            <Button className="logout" onClick={logout}>Log Out</Button>
                        </div>
                        :
                        <div className="dashboard-card">
                            <h1>Dashboard</h1>
                            <div className="dashboard-text">
                                {alert}
                            </div>
                        </div>
                }
            </Paper>
        </div>

    )
}

export default Dashboard;