import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import styles from './styles/CustomTextInput';
import {useSelector, useDispatch} from 'react-redux';
import {setEmail, setPassword} from '../utils/store/AuthSlice';

const CustomTextInput = ({
  secure,
  hintColor,
  customHint,
}: {
  secure: boolean;
  hintColor?: string;
  customHint?: string;
}) => {
  const dispatch = useDispatch();

  const {secureValue, emailValue} = useSelector((state): any => {
    return state;
  });

  const hintText = secure ? 'Account Password' : 'Your Email ID';

  return (
    <TextInput
      style={styles().textInput}
      placeholderTextColor={hintColor || '#D6DAE8'}
      placeholder={customHint || hintText}
      onChangeText={text =>
        dispatch(secure ? setPassword(text) : setEmail(text))
      }
      value={secure ? secureValue : emailValue}
      secureTextEntry={secure}
    />
  );
};

export default CustomTextInput;
