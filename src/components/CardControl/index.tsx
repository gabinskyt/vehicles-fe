import React from 'react';
import { CardControlProps } from './interfaces/card-control.interface';

export const CardControl: React.FC<CardControlProps> = (props) => {
    return (
        <div className={`card uniform-card mb-4 shadow-sm ${props.className}`}>
            <div className='card-header'>
                <h4 className='my-0 fw-normal'>{props.title}</h4>
            </div>
            <div className='card-body'>{props.children}</div>
        </div>
    );
};
