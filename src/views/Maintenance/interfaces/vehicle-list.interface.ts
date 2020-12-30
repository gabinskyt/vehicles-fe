import { Vehicle } from './vehicle.interface';

export interface VehicleListProps {
    vehicles: Array<Vehicle>;
    search?: string;
    onUpdateStatus: (vehicle: Vehicle) => Promise<void>;
}
