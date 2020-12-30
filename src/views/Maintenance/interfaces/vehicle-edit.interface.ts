import { Vehicle } from './vehicle.interface';

export interface VehicleEditProps {
    vehicle: Vehicle;
    onChange: (vehicle: Vehicle) => void;
}
