import { Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserHttpClient } from '../../services/UserHttpClient';
import './Register.css';

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState('');
    const httpClient = new UserHttpClient()
    const history = useHistory();

    const registerUser = () => {
        if (password === confirmPassword) {
            const user = {
                name: username,
                email: email,
                password: password,
                role: "placeholder"
            }

            httpClient.register(user)
                .then((res: any) => {
                    if (res['status'] === 1) {
                        setAlert(res['message'])
                    }
                    else {
                        setAlert('')
                        history.push('/shop');
                    }
                })
        }
        else {
            setAlert('Passwords do not match!')
        }
    }

    return (
        <div className="register">
            <div className="form-input">
                <Paper>
                    <h1>Register</h1>
                    <div className="alert">
                        {alert}
                    </div>
                    <TextField id="filled-basic1" label="Email Address" variant="filled" className="username" onChange={(event) => setEmail(event.target.value)} />
                    <TextField id="filled-basic2" label="Full Name" variant="filled" className="password" onChange={(event) => setUsername(event.target.value)} />
                    <TextField id="filled-basic3" label="Password" variant="filled" className="username" type="password" onChange={(event) => setPassword(event.target.value)} />
                    <TextField id="filled-basic4" label="Confirm Password" variant="filled" className="password" type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
                    <Button className="submit-login" onClick={registerUser}>Submit</Button>
                </Paper>
            </div>
        </div>
    )
}

export default Register;
