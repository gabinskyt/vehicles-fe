export interface View {
    path: string;
    component: JSX.Element | React.FC;
    label: string;
    listed: boolean;
}
