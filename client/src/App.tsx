import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Routes from './routes';
import Loading from './components/Loading';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
      <GlobalStyle />
      <ToastContainer
        position="top-left"
        autoClose={2500}
        pauseOnHover
        icon
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '70%',
          zIndex: 9999,
        }}
      />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
