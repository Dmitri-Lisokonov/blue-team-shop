import { Button, Paper, TextField } from '@mui/material';
import './Login.css';

const Login = () => {

    return (
        <div className="login">
            <div className="form-input">
                <Paper>
                    <TextField id="filled-basic" label="Username" variant="filled" className="username" />
                    <TextField id="filled-basic" label="Password" variant="filled" className="password" />
                    <Button className="submit-login">Submit</Button>
                </Paper>
            </div>
        </div>
    )
}

export default Login;