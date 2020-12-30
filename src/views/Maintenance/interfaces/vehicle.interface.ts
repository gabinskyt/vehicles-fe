import { VehicleStatus } from 'utils/enums/vehicle-status.enum';

export interface Vehicle {
    description: string;
    make: string;
    model: string;
    estimatedate?: string;
    id?: number;
    image: string;
    km?: number;
    status?: VehicleStatus;
}
