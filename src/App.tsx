import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

import CartList from './pages/CartList';
import CartPayment from './pages/CartPayment';
import CartConfirmation from './pages/CartConfirmation';

import AppProvider from './providers/AppProvider';

import GlobalStyle from './styles/global';
import { AppContainer } from './styles/styles';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  const mainRoutes = {
    path: '/',
    element: <Home />
  };

  const cartRoutes = {
    path: 'cart/*',
    element: <Cart />,
    children: [
      { path: '*', element: <CartList /> },
      { path: 'payment', element: <CartPayment /> },
      { path: 'confirmation', element: <CartConfirmation /> }
    ]
  };

  const routing = useRoutes([mainRoutes, cartRoutes]);

  return (
    <AppContainer>
      <AppProvider>
        {routing}
        <GlobalStyle />
      </AppProvider>
    </AppContainer>
  );
}

export default App;
