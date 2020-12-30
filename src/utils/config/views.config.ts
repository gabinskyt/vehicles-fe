import { View } from 'utils/interfaces/view.interface';
import { Maintenance } from 'views/Maintenance';

export const ViewsConfig: Array<View> = [
    {
        path: '/',
        component: Maintenance,
        label: 'Mantenimiento',
        listed: true
    }
];
