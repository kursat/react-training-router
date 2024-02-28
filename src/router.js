import { createBrowserRouter } from 'react-router-dom';
import Page1 from './routes/Page1';
import About from './routes/About';
import MainLayout from './routes/MainLayout';
import MainIndex from './routes/MainIndex';
import Users from './routes/users/Users';
import User from './routes/users/User';
import AdminLayout from './routes/admin/AdminLayout';
import Dashboard from './routes/admin/Dashboard';
import NotFound from './routes/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <MainIndex />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'page-1',
                element: <Page1 />,
            },
        ],
    },
    {
        path: '/users',
        element: <Users />,
    },
    {
        path: '/users/:userId',
        element: <User />,
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: (
                    // <AuthGuard>
                    <Dashboard />
                    // </AuthGuard>
                ),
            },
        ],
    },
]);
