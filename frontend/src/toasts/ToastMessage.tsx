import { toast } from 'react-toastify';

export const showToastMessage = (message: string) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose:1000,
    });
};
