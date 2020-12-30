import { Vehicle } from './vehicle.interface';

export interface VehicleControllProps{
    vehicle: Vehicle;
    onEdit: () => void;
}
