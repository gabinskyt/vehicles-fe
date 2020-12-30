import React from 'react';

export const Spinner: React.FC = () => {
    return (
        <div className='w-100'>
            <img
                className='mx-auto img-fluid w-50 d-block'
                src='./assets/spinner.gif'
                alt=''
            />
        </div>
    );
};
