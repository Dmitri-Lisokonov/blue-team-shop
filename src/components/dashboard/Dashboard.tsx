import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './Dashboard.css';

const Dashboard = () => {
    const { user } = useContext(ShopContext);

    return (
        <div>
            {
                user.id !== undefined ?
                    <div>
                        Welcome back, {user.username}
                    </div>
                    :
                    <div>
                        You are not logged in.
                    </div>
            }
        </div>

    )
}

export default Dashboard;