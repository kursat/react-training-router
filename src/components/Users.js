import React, { useState } from 'react';
import { User } from '@nextui-org/react';

const Users = ({ users, children }) => {
    const [adminUserId, setAdminUserId] = useState('4');

    return (
        <div className="mt-8">
            <div>{users.length}</div>

            <ul>
                {/*{users.map((user) => (*/}
                {/*    <li>*/}
                {/*        <User name={`${user.firstName} ${user.lastName}`} />*/}
                {/*    </li>*/}
                {/*))}*/}
                {children(users, adminUserId)}
            </ul>
        </div>
    );
};

export default Users;
