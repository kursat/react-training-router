import React from 'react';
import { withUserId } from '../HOCs/withUserId';
import Title from '../components/Title';
import { HiCheck } from 'react-icons/hi2';

const MyIcon = () => <HiCheck />;

const MainIndex = (props) => {
    console.log('props', props);

    return (
        <div>
            {/*<Title text={'Index'} renderLeftContent={HiCheck} />*/}
            {/*<Title text={'Index'} renderLeftContent={() => <HiCheck />} />*/}

            <Title
                text={'Index'}
                renderLeftContent={HiCheck}
                rightElement={<HiCheck />}
            />
        </div>
    );
};

export default withUserId(MainIndex, 'cookies');
