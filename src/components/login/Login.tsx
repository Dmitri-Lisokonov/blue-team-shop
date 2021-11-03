import { Button, Paper, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { User } from '../../models/User';
import { UserGoogleHttpClient } from '../../services/UserGoogleHttpClient';
import { UserHttpClient } from '../../services/UserHttpClient';
import './Login.css';

const Login = () => {

    const googleUserClient = new UserGoogleHttpClient();
    const userClient = new UserHttpClient();
    const { user, setUserFetched, userfetched } = useContext(ShopContext);
    const [alert, setAlert] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const loginGoogleUser = (googleData: any) => {
        googleUserClient.Login(googleData)
            .then((res: any) => {
                console.log(res);
                if (res['status'] === 0) {
                    console.log(res['message'])
                    let user: User = JSON.parse(res['message']);
                    localStorage.setItem('user', JSON.stringify(user));
                    setUserFetched(!userfetched);
                    history.push('/shop');
                }
                else {
                    setAlert(res['message']);
                }
            })
    }

    const loginUser = () => {
        if (email === '' || password === '') {
            setAlert('Email and Password fields both need to be filled in');
        }
        else {
            const user = {
                email: email,
                password: password
            }
            userClient.login(user)
                .then((res: any) => {
                    if (res['status'] === 0) {
                        console.log(res['message'])
                        let user: User = JSON.parse(res['message']);
                        localStorage.setItem('user', JSON.stringify(user));
                        setUserFetched(!userfetched);
                        history.push('/shop');
                    }
                    else {
                        setAlert(res['message']);
                    }
                })
        }
    }

    return (
        <div className="login">
            <div className="form-input">
                <Paper>
                    <h1 className="login-title">Log In</h1>
                    {!user.email ?
                        <>
                            <div className="alert">{alert}</div>
                            <TextField id="filled-basic" label="Email Address" variant="filled" className="username" onChange={(event) => setEmail(event.target.value)} />
                            <TextField id="filled-basic" label="Password" variant="filled" className="password" onChange={(event) => setPassword(event.target.value)} />
                            <Button className="submit-login" onClick={loginUser}>Submit</Button>
                            <div className="google-auth">
                                <GoogleLogin
                                    clientId={"159151186149-jbv6ar6d2m1v8ep15s8a82akngkd8e74.apps.googleusercontent.com"}
                                    buttonText="Continue with Google account"
                                    onSuccess={loginGoogleUser}
                                    onFailure={() => setAlert("Google login failed, please try again")}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                        </>
                        :
                        <div className="already-loggedin">
                            You are already logged in
                        </div>
                    }
                </Paper>
            </div >

        </div >
    )
}

export default Login;