import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles/TestContact';
import TestContactScreen from '../organisms/TestContactScreen';

const TestScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
        <TestContactScreen screenType="test" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TestScreen;
