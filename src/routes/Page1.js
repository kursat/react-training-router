import React from 'react';
import Users from '../components/Users';
import { User } from '@nextui-org/react';

const users = [
    {
        id: '24754a1be39bd7eb2ffffa74',
        sex: 'female',
        firstName: 'Fahrünissa',
        lastName: 'Adıvar',
        fullName: 'Fahrünissa Adıvar',
        email: 'fahrunissa.ad8hvar0@goc.gov.tr',
    },
    {
        id: 'dfb0ab63fdedb44ac241f07c',
        sex: 'female',
        firstName: 'Günnur',
        lastName: 'Topaloğlu',
        fullName: 'Günnur Topaloğlu',
        email: 'gunnur50@goc.gov.tr',
    },
    {
        id: '13b223b34deadf21688a7a87',
        sex: 'female',
        firstName: 'Rengin',
        lastName: 'Bademci',
        fullName: 'Rengin Bademci',
        email: 'rengin_bademci@goc.gov.tr',
    },
];

const Page1 = () => {
    return (
        <div>
            <Users users={users}>
                {/*{(users) => {*/}
                {/*    return users.map((user) => {*/}
                {/*        return <li>{user.firstName}</li>;*/}
                {/*    });*/}
                {/*}}*/}

                {(users) => {
                    return users.map((user) => {
                        // return <li>{user.firstName} {user.firstName}</li>;
                        return (
                            <li>
                                <User name={user.firstName} />
                            </li>
                        );
                    });
                }}
            </Users>
        </div>
    );
};

export default Page1;
