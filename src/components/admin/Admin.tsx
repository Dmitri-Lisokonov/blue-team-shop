import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { ProductHttpClient } from '../../services/ProductHttpClient';
import './Admin.css';

const Admin = () => {
    const [alert, setAlert] = useState('');
    const { user, setUser } = useContext(ShopContext);
    const productClient = new ProductHttpClient();

    useEffect(() => {

        if (user.token) {
            productClient.fetchSecret(user.token)
                .then((res: any) => {
                    setAlert(res['message']);
                });
        }
    })

    return (
        <div className="admin">
            {
                user ? <div>{alert}</div>
                    :
                    <div>User unauthorized</div>
            }

        </div>
    )
}

export default Admin;
