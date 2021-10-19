import { Button, Paper, TextField } from '@mui/material';
import './Register.css';

const Register = () => {

    return (
        <div className="register">
            <div className="form-input">
                <Paper>
                    <TextField id="filled-basic" label="Username" variant="filled" className="username" />
                    <TextField id="filled-basic" label="Password" variant="filled" className="password" />
                    <TextField id="filled-basic" label="Confirm Password" variant="filled" className="password" />
                    <Button className="submit-login">Submit</Button>
                </Paper>
            </div>
        </div>
    )
}

export default Register;
