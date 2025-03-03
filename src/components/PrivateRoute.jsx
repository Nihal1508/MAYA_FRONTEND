import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout'; // Make sure the path is correct

function PrivateRoute() {
    const checkAuth = () => {
        // Check if the user is authenticated
        return true;
    }
    if (!checkAuth) {
        return <Navigate to="/" replace />;
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default PrivateRoute;