import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1 className="text-3xl">Main Page</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/page-1">Page 1</Link>
            </nav>

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
