import React, { useState } from "react";
import {
  KeyboardAvoidingView, ScrollView,

} from "react-native";
import styles from './styles/Auth'
import AuthScreen from "../organisms/AuthScreen";

const Login = () => {

  return (
    <KeyboardAvoidingView
    behavior="height"
    style={styles.container}
  >
    <ScrollView>
      <AuthScreen authType="login" />
    </ScrollView>
  </KeyboardAvoidingView>
  
  );
};

export default Login;
