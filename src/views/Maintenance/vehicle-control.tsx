import { CardControl } from 'components/CardControl';
import React from 'react';
import { VehicleStatus } from 'utils/enums/vehicle-status.enum';
import { VehicleControllProps } from './interfaces/vehicle-controll.interface';

export const VehicleControl: React.FC<VehicleControllProps> = (props) => {
    return (
        <div className='col'>
            <CardControl
                title={`${props.vehicle.make} ${props.vehicle.model}`}
                className={
                    props.vehicle.status === VehicleStatus.MAINTENANCE
                        ? 'border-warning'
                        : ''
                }
            >
                <img className='img-fluid' src={props.vehicle.image} alt='' />

                <ul className='list-unstyled mt-3 mb-4'>
                    {props.vehicle.id && (
                        <li>
                            <b>ID: </b>
                            {props.vehicle.id}
                        </li>
                    )}

                    <li>
                        <b>Marca: </b>
                        {props.vehicle.make}
                    </li>

                    <li>
                        <b>Modelo: </b>
                        {props.vehicle.model}
                    </li>

                    {props.vehicle.km !== undefined && (
                        <li>
                            <b>Kilometros: </b>
                            {props.vehicle.km}
                        </li>
                    )}

                    <li>
                        <b>Servicio: </b>
                        {props.vehicle.description}
                    </li>

                    <li className='mt-4 text-success'>
                        <b>Status: </b>
                        {props.vehicle.status === VehicleStatus.MAINTENANCE
                            ? 'En mantenimiento'
                            : 'Disponible'}
                    </li>

                    {props.vehicle.estimatedate &&
                        props.vehicle.status === VehicleStatus.MAINTENANCE && (
                            <li className='text-success'>
                                <b>Fecha estimada de entrega: </b>
                                {props.vehicle.estimatedate}
                            </li>
                        )}
                </ul>

                <button
                    type='button'
                    className={`w-100 btn btn-lg btn-outline-${
                        props.vehicle.status !== VehicleStatus.MAINTENANCE
                            ? 'primary'
                            : 'warning'
                    }`}
                    onClick={() => props.onEdit()}
                >
                    {props.vehicle.status !== VehicleStatus.MAINTENANCE
                        ? 'Marcar en mantenimiento'
                        : 'Marcar disponible'}
                </button>
            </CardControl>
        </div>
    );
};
