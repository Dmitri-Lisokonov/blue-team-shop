import { Button, Paper, TextField } from '@mui/material';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { UserHttpClient } from '../../services/UserHttpClient';
import './Login.css';

const Login = () => {

    const userClient = new UserHttpClient();

    const loginSuccess = (googleData: any) => {
        userClient.validateGoogleLogin(googleData, true);
        localStorage.setItem('loginToken', googleData.tokenId);
    }

    return (
        <div className="login">
            <div className="form-input">
                <Paper>
                    <h1 className="login-title">Log In</h1>
                    {/* <TextField id="filled-basic" label="Username" variant="filled" className="username" />
                    <TextField id="filled-basic" label="Password" variant="filled" className="password" />
                    <Button className="submit-login">Submit</Button> */}
                    <div className="google-auth">
                        <GoogleLogin
                            clientId={"159151186149-jbv6ar6d2m1v8ep15s8a82akngkd8e74.apps.googleusercontent.com"}
                            buttonText="Log in with Google"
                            onSuccess={loginSuccess}
                            onFailure={() => console.log('Failed login alert')}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </Paper>

            </div>

        </div>
    )
}

export default Login;