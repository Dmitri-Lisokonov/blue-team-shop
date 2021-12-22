import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from '../admin/Admin';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';
import PasswordForgot from '../password-forgot/PasswordForgot';
import PasswordReset from '../password-reset/PasswordReset';
import Register from '../register/Register';
import Shop from '../shop/Shop';
import './ContentView.css';

const ContentView = () => {

    return (
        <div className="app-wrapper">
            <div className="nav-wrapper">
                <Navbar />
            </div>
            <div className="view-wrapper">
                <Router>
                    <Switch>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/recovery">
                            <PasswordForgot />
                        </Route>
                        <Route path="/reset/:token" component={PasswordReset} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default ContentView;