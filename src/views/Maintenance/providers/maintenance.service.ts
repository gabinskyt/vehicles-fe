import { Vehicle } from '../interfaces/vehicle.interface';
import { API } from 'aws-amplify';

/**
 * Class responsible for providing a way to send requests to the backend
 */
export class MaintenanceService {
    public patchVehicleStatus(vehicle: Vehicle): Promise<void>{
        return API.patch(
            'vehicles-service-dev',
            `/vehicles/${vehicle.id}`,
            {
                body: {
                    status: vehicle.status,
                    estimatedate: vehicle.estimatedate
                }
            }
        ).catch(() => {
            return;
        });
    }

    /**
     * Returns the list of vehicles
     */
    public getVehicles(): Promise<Array<Vehicle>> {
        return API.get(
            'vehicles-service-dev',
            '/vehicles',
            {}
        ).then(response => {
            return response;
        }).catch(() => {
            return [];
        });
    }
}
