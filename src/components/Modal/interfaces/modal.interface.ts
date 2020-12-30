export interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    body: JSX.Element | React.FC;
    footer?: JSX.Element | React.FC;
}
