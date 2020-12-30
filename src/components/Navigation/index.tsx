import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationInterface } from './interfaces/navigation.interface';

export const Navigation: React.FC<NavigationInterface> = (props) => {
    return (
        <header className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
            <p className='h5 my-0 me-md-auto fw-normal'>Vehicles Portal</p>
            <nav className='my-2 my-md-0 me-md-3'>
                {props.views.map(
                    (view, index) =>
                        view.listed && (
                            <Link
                                key={`nav-link-${index}`}
                                className='p-2 text-dark'
                                to={view.path}
                            >
                                {view.label}
                            </Link>
                        ),
                )}
            </nav>
        </header>
    );
};
