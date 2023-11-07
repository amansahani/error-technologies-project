import React, { useState } from "react";
import {
  KeyboardAvoidingView,

} from "react-native";
import styles from './styles/Auth'
import AuthScreen from "../organisms/AuthScreen";

const Register = () => {

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
     <AuthScreen authType="register" />
    </KeyboardAvoidingView>
  );
};

export default Register;
