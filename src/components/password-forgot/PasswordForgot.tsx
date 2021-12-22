import { Button, Paper, TextField } from '@mui/material';
import './PasswordForgot.css';
import { useState } from 'react';
import { UserHttpClient } from '../../services/UserHttpClient';
import { User } from '../../models/User';

const PasswordForgot = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState('');
    const userHttpClient = new UserHttpClient();

    const forgotPassword = () => {
        const user = {
            "email": email
        }

        userHttpClient.forgotPassword(user)
            .then((res: any) => {
                setAlert(res['message'])
            })
    }

    return (
        <div className="login">
            <div className="form-input">
                <Paper>
                    <h1 className="login-title">Account Recovery</h1>
                    <>
                        <div>{alert}</div>
                        <TextField id="filled-basic" label="Email Address" variant="filled" className="username" onChange={(event) => setEmail(event.target.value)} />
                        <Button className="submit-login" onClick={forgotPassword}>Reset Password</Button>
                    </>
                </Paper>
            </div >

        </div >
    )
}

export default PasswordForgot;