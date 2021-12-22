import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserHttpClient } from "../../services/UserHttpClient";

const AccountConfirmed = () => {
    let { token }: any = useParams();
    const userHttpClient = new UserHttpClient();
    const [message, setMessage] = useState('');

    useEffect(() => {
        userHttpClient.verifyEmail(token)
            .then((res: any) => {
                setMessage(res['message']);
            })
    }, [])

    return (
        <div className="login">
            <div className="form-input">
                <Paper>
                    <h1 className="login-title">{message}</h1>
                </Paper>
            </div >
        </div >
    )
}

export default AccountConfirmed;