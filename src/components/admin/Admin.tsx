import { useEffect, useState } from 'react';
import { ProductHttpClient } from '../../services/ProductHttpClient';
import './Admin.css';

const Admin = () => {
    const [alert, setAlert] = useState('');
    const productClient = new ProductHttpClient();

    useEffect(() => {
        productClient.fetchSecret()
            .then((res: any) => {
                setAlert(res['message']);
            });
    }, [alert])

    return (
        <div className="admin">
            {alert}
        </div>
    )
}

export default Admin;
