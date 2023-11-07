import {KeyboardAvoidingView, ScrollView} from 'react-native';
import TestContactScreen from '../organisms/TestContactScreen';
import styles from './styles/TestContact';

const ContactScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
        <TestContactScreen screenType="contact" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default ContactScreen;
