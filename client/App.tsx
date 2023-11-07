import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import NavContainer from './src/navigator/NavigationContainer';
import { Provider } from 'react-redux';
import store from './src/utils/store/AuthStore';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigator/StackNavigator';
const App = () => {
  return (
    <>
      <NavContainer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addressContainer: {
    marginTop: 20,
    padding: 20,
  },
  addressText: {
    fontSize: 16,
  },
  accountContainer: {
    marginTop: 20,
    padding: 20,
  },
  accountText: {
    fontSize: 16,
  },
  zonesContainer: {
    marginTop: 20,
    padding: 20,
  },
  zonesText: {
    fontSize: 16,
  },
  testLengthContainer: {
    marginTop: 20,
    padding: 20,
  },
  testLengthText: {
    fontSize: 16,
  },
  commentContainer: {
    marginTop: 20,
    padding: 20,
  },
  commentText: {
    fontSize: 16,
  },
  passcodeContainer: {
    marginTop: 20,
    padding: 20,
  },
  passcodeText: {
    fontSize: 16,
  },
  passcodeInput: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 20,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 5,
  },
});

export default App;