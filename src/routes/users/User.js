import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userId } = useParams();

    console.log('params', userId);

    return <div>User</div>;
};

export default User;
