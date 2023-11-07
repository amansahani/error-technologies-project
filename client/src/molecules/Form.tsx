import React from 'react';
import CustomTextInput from '../atoms/CustomTextInput';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import Button from '../atoms/Buttons';
import styles from './styles/buttonAlign';
import {useNavigation} from '@react-navigation/native';
import {
  loginUser,
  registerUser,
  storeAuthStatus,
  storeToken,
} from '../utils/AuthAPI';
import {useSelector} from 'react-redux';
type Props = {
  authType: string;
};

function Form({authType}: Props) {
  const navigation = useNavigation();
  const {emailValue, secureValue} = useSelector((state): any => {
    return state;
  });

  const handleNav = () => {
    if (authType === 'login') {
      navigation.navigate('Register' as never);
    } else {
      navigation.navigate('Login' as never);
    }
  };

  const handleAuth = async () => {
    if (authType === 'login') {
      if (emailValue && secureValue) {
        const result = await loginUser(emailValue, secureValue);
        if (result != 'failed') {
          storeToken(result);
          storeAuthStatus('valid');
          storeToken(result);
          navigation.navigate('Home' as never);
        } else {
          ToastAndroid.show('Login failed', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Enter Valid Credentials', ToastAndroid.SHORT);
      }
    } else {
      if (emailValue && secureValue) {
        const result = await registerUser(emailValue, secureValue);
        if (result != 'failed') {
          storeToken(result);
          navigation.navigate('Login' as never);
          ToastAndroid.show('Login using your credentials', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Registration failed', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Enter Valid Credentials', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <>
      <CustomTextInput secure={false} />
      <CustomTextInput secure={true} />
      <Button
        bgColor="white"
        cbk={handleAuth}
        textColor="#007aff"
        title="Login"
      />

      <TouchableOpacity style={styles.navAlign} onPress={handleNav}>
        <Text style={styles.navText}>
          {authType === 'login'
            ? 'Click here to Register'
            : 'Click here to Login'}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default Form;
