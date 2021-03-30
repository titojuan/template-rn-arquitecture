import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './routes';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './redux';

const Root: React.FC = () => (
  <StoreProvider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </StoreProvider>
);

export default Root;
