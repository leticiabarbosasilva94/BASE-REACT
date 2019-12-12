import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyles from './styles/GlobalStyles';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
