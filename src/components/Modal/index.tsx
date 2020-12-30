import React from 'react';
import { ModalProps } from './interfaces/modal.interface';

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <>
            {props.show && (
                <>
                    <div className='modal fade show d-block' tabIndex={-1}>
                        <div className='modal-dialog modal-xl'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title'>{props.title}</h5>
                                    <button
                                        type='button'
                                        className='close'
                                        data-dismiss='modal'
                                        aria-label='Close'
                                        onClick={() => props.onClose()}
                                    >
                                        <span aria-hidden='true'>&times;</span>
                                    </button>
                                </div>
                                <div className='modal-body'>{props.body}</div>
                                <div className='modal-footer'>{props.footer}</div>
                            </div>
                        </div>
                    </div>
                    <div className='modal-backdrop fade show'></div>
                </>
            )}
        </>
    );
};
