import { Spinner } from 'components/Spinner';
import React, { useEffect, useRef, useState } from 'react';
import { Vehicle } from './interfaces/vehicle.interface';
import { MaintenanceService } from './providers/maintenance.service';
import { VehicleList } from './vehicle-list';

/**
 * View responsible for providing an interface for listing the vehicles
 */
export const Maintenance: React.FC = () => {
    const service = useRef(new MaintenanceService()).current;
    const [vehicleList, setVehicleList] = useState<Array<Vehicle>>([]);
    const [search, setSearch] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        service.getVehicles().then((vehicles) => {
            setVehicleList(vehicles);
            setLoading(false);
        });
    }, [service]);

    return (
        <main className='container'>
            <header className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
                <h1 className='display-4'>Mantenimiento de vehiculos</h1>
                <p className='lead'>Visualice y edite vehiculos en mantenimiento.</p>
            </header>

            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                        <i className='fas fa-search'></i>
                    </span>
                </div>

                <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese un ID'
                    aria-label='Vehicle ID'
                    aria-describedby='basic-addon1'
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
            </div>

            {loading && <Spinner />}

            <VehicleList
                vehicles={vehicleList}
                search={search}
                onUpdateStatus={(vehicle) => service.patchVehicleStatus(vehicle)}
            />

            <footer className='pt-4 my-md-5 pt-md-5 border-top'>
                <div className='row'>
                    <div className='col-6 col-md'>
                        <h5>Contacto</h5>
                        <a href='mailto: moisestello12@gmail.com'>
                            moisestello12@gmail.com
                        </a>
                        <p>+52 (221) 174 6480</p>
                    </div>
                </div>
            </footer>
        </main>
    );
};
