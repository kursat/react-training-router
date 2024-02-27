import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            Users
            <ul></ul>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Users;
