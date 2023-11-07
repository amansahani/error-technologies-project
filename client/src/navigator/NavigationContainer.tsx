import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import  AppNavigator  from './StackNavigator';
import { Provider } from 'react-redux';
import store from '../utils/store/AuthStore';
function NavContainer() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </Provider>
  );
}

export default NavContainer;
