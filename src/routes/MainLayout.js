import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Button } from '@nextui-org/react';

const MainLayout = () => {
    return (
        <div>
            <h1 className="text-3xl">Main Page</h1>
            <nav>
                <Link to="/">Home</Link>
                {/*<Link to="/about">About</Link>*/}
                {/*<Link to="/users">Users</Link>*/}

                <Button as={Link} to={'/'}>
                    Home
                </Button>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-300' : ''
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/page-1"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-300' : ''
                    }
                >
                    Page 1
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-300' : ''
                    }
                >
                    Users
                </NavLink>
            </nav>

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
