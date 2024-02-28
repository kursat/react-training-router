import React, { useEffect } from 'react';
import { Outlet, redirect, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
    const userId = null;

    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            console.log('navigate', navigate);
            navigate('/login', { replace: true });

            return null;
        }
    }, [navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
