import React from 'react';
import {
    Outlet,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { Button } from '@nextui-org/react';

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    const navigate = useNavigate();

    console.log('location', location);

    const onClickButton = () => {
        navigate('/', { replace: true });
    };

    return (
        <div>
            Users
            <ul></ul>
            <div>
                <Outlet />
            </div>
            <Button onClick={onClickButton}> Go Home</Button>
        </div>
    );
};

export default Users;
