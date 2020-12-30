import React from 'react';
import { VehicleStatus } from 'utils/enums/vehicle-status.enum';
import { VehicleEditProps } from './interfaces/vehicle-edit.interface';

export const VehicleEdit: React.FC<VehicleEditProps> = (props) => {
    return (
        <div className='row'>
            <div className='col-sm'>
                <img className='img-fluid' src={props.vehicle.image} alt='' />
            </div>

            <div className='col-sm-8'>
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th scope='row'>ID</th>
                            <td>{props.vehicle.id}</td>
                        </tr>

                        <tr>
                            <th scope='row'>Marca</th>
                            <td>{props.vehicle.make}</td>
                        </tr>

                        <tr>
                            <th scope='row'>Modelo</th>
                            <td>{props.vehicle.model}</td>
                        </tr>

                        <tr>
                            <th scope='row'>Kilometros</th>
                            <td>{props.vehicle.km}</td>
                        </tr>

                        <tr>
                            <th scope='row'>Servicio</th>
                            <td>{props.vehicle.description}</td>
                        </tr>

                        <tr>
                            <th scope='row'>Status Actual</th>
                            <td
                                className={
                                    props.vehicle.status !== VehicleStatus.MAINTENANCE
                                        ? 'text-success'
                                        : 'text-warning'
                                }
                            >
                                {props.vehicle.status === VehicleStatus.MAINTENANCE
                                    ? 'En mantenimiento'
                                    : 'Disponible'}
                            </td>
                        </tr>

                        <tr>
                            <th scope='row'>Nuevo Status</th>
                            <td
                                className={
                                    props.vehicle.status === VehicleStatus.MAINTENANCE
                                        ? 'text-success'
                                        : 'text-warning'
                                }
                            >
                                {props.vehicle.status === VehicleStatus.MAINTENANCE
                                    ? 'Disponible'
                                    : 'En mantenimiento'}
                            </td>
                        </tr>

                        <tr>
                            <th scope='row'>Fecha estimada de entrega</th>
                            <td>
                                {props.vehicle.status !== VehicleStatus.MAINTENANCE && (
                                    <input
                                        className='form-control'
                                        type='date'
                                        onChange={(event) => {
                                            props.onChange({
                                                ...props.vehicle,
                                                estimatedate: new Date(event.target.value)
                                                    .toISOString()
                                                    .substr(0, 10),
                                            });
                                        }}
                                    />
                                )}
                                {props.vehicle.status === VehicleStatus.MAINTENANCE &&
                                    props.vehicle.estimatedate}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
