import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProps } from 'react-toastify/dist/types';

const Toast: React.FC<ToastProps> = ({ ...rest }) => {
  return (
    <ToastContainer
      {...rest}
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toast;
