import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductHttpClient } from '../../services/ProductHttpClient';
import './Admin.css';

const Admin = () => {
    const productClient = new ProductHttpClient();
    const [alert, setAlert] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        try {
            const json = localStorage.getItem('user');
            if (json) {
                const user = JSON.parse(json);
                productClient.admin(user['Token'])
                    .then((res: any) => {
                        if (res['status'] === 0) {
                            setResponse(res['message']);
                        }
                        else {
                            setAlert(res['message']);
                        }

                    })
            }
            else {
                setAlert('You have to login to access this panel')
            }
        }
        catch (err) {
            console.error(err);
        }

    }, [])

    return (
        <div className="admin">
            <div>
                <Paper className="card">
                    {response}
                    {alert}
                </Paper>
            </div>
        </div>
    )
}

export default Admin;
