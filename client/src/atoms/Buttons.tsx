import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles/Buttons';

type buttonTypes = {
  title: string;
  bgColor: string;
  textColor: string;
  cbk: any;
};

const Buttons = ({title, bgColor, textColor, cbk}: buttonTypes) => {
  const style = styles(textColor, bgColor);
  const buttonStyle = style.button;
  const buttonTextStyle = style.buttonText;
  return (
    <View style={style.buttonAlign}>
      <TouchableOpacity onPress={cbk} style={buttonStyle}>
        <Text style={buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
