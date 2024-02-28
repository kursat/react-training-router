import React from 'react';

const Title = ({ text, renderLeftContent, rightElement }) => {
    return (
        <h1 className="text-3xl text-blue-200 bg-black">
            {renderLeftContent()}
            {text}
            {rightElement}
        </h1>
    );
};

export default Title;
