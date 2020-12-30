import { Modal } from 'components/Modal';
import { Spinner } from 'components/Spinner';
import React, { useState } from 'react';
import { VehicleStatus } from 'utils/enums/vehicle-status.enum';
import { VehicleListProps } from './interfaces/vehicle-list.interface';
import { Vehicle } from './interfaces/vehicle.interface';
import { VehicleControl } from './vehicle-control';
import { VehicleEdit } from './vehicle-edit';

export const VehicleList: React.FC<VehicleListProps> = (props) => {
    const [currentVehicle, setCurrentVehicle] = useState<Vehicle>();
    const [newVehicle, setNewVehicle] = useState<Vehicle | null>();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
                {props.vehicles.map(
                    (vehicle, index) =>
                        (!props.search ||
                            String(vehicle.id).match(
                                new RegExp('^' + props.search + '.*', 'g'),
                            )) && (
                            <VehicleControl
                                key={`vehicle-list-item-${index}`}
                                vehicle={vehicle}
                                onEdit={() => {
                                    setCurrentVehicle(vehicle);
                                    setNewVehicle(vehicle);
                                    setShowModal(true);
                                }}
                            />
                        ),
                )}
            </div>

            {currentVehicle && (
                <Modal
                    show={showModal}
                    onClose={() => {
                        setShowModal(false);
                    }}
                    title={`${currentVehicle?.make} ${currentVehicle?.model} - ${currentVehicle?.id}`}
                    body={
                        loading ? (
                            <Spinner />
                        ) : (
                            <VehicleEdit
                                vehicle={currentVehicle}
                                onChange={(vehicle) => {
                                    setNewVehicle(vehicle);
                                }}
                            />
                        )
                    }
                    footer={
                        <>
                            <button
                                disabled={loading}
                                type='button'
                                className='btn btn-secondary'
                                onClick={() => {
                                    setNewVehicle(null);
                                    setShowModal(false);
                                }}
                            >
                                Cancelar
                            </button>
                            <button
                                disabled={loading}
                                type='button'
                                className='btn btn-primary'
                                data-dismiss='modal'
                                onClick={() => {
                                    setLoading(true);
                                    newVehicle &&
                                        props
                                            .onUpdateStatus({
                                                ...newVehicle,
                                                status:
                                                    newVehicle.status ===
                                                    VehicleStatus.MAINTENANCE
                                                        ? VehicleStatus.READY
                                                        : VehicleStatus.MAINTENANCE,
                                            })
                                            .then(() => {
                                                setShowModal(false);
                                                setLoading(false);
                                                window.location.reload();
                                            });
                                }}
                            >
                                Confirmar cambio de status
                            </button>
                        </>
                    }
                />
            )}
        </>
    );
};
