import { Button, Paper, TextField } from '@mui/material';
import './PasswordReset.css';
import { useState } from 'react';
import { UserHttpClient } from '../../services/UserHttpClient';
import { useParams } from 'react-router-dom';

const PasswordReset = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [alert, setAlert] = useState('');
    const [response, setResponse] = useState('');
    const userHttpClient = new UserHttpClient();
    let { token }: any = useParams();

    const resetPassword = () => {
        if (password === passwordConfirm) {
            const user = {
                "password": password
            }

            userHttpClient.resetPassword(user, token)
                .then((res: any) => {
                    if (res['status'] === 0) {
                        setResponse(res['message']);
                    }
                    else {
                        setAlert(res['message']);
                    }
                });
        }
        else {
            setAlert('passwords did not match')
        }
    }

    return (
        <div className="login">
            <div className="form-input">
                <Paper>
                    <h1 className="login-title">Reset Password</h1>
                    <>
                        <div>{response}</div>
                        <div className="alert">{alert}</div>
                        <TextField id="filled-basic" label="Password" variant="filled" className="username" type="password" onChange={(event) => setPassword(event.target.value)} />
                        <TextField id="filled-basic" label="Confirm Password" variant="filled" className="username" type="password" onChange={(event) => setPasswordConfirm(event.target.value)} />
                        <Button className="submit-login" onClick={resetPassword}>Reset Password</Button>
                    </>
                </Paper>
            </div >
        </div >
    )
}

export default PasswordReset;