import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import React from 'react';
import MenuButton from '../atoms/MenuButton';
import TestCard from '../atoms/TestCard';
import Card from '../atoms/Card';
import CustomTextInput from '../atoms/CustomTextInput';
import Dropdown from '../atoms/DropDown';
import Button from '../atoms/Buttons';
import ContactsCard from '../atoms/ContactsCard';
import styles from './styles/TestContact';
import {useSelector} from 'react-redux';
type Props = {
  screenType: string;
};

const TestContactScreen = ({screenType}: Props) => {
  const test = screenType === 'test' ? true : false;
  const data = [
    {label: 'One', value: '1'},
    {label: 'Two', value: '2'},
    {label: 'Three', value: '3'},
    {label: 'Four', value: '4'},
    {label: 'Five', value: '5'},
  ];
  const {businessData} = useSelector((state): any => {
    return state;
  });
  const toastMessage = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleItemSelect = (item: {label: string; value: string}) => {
    console.log('Selected Item:', item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MenuButton />
        <View style={styles.verticalMarginBox} />
        <Text style={styles.headerText}>
          {test ? 'Test Device' : 'Contact Device'}
        </Text>
        <View style={styles.verticalMarginBox} />
        {test ? <TestCard /> : undefined}
        <View style={styles.verticalMarginBox} />
        <Dropdown
          data={businessData}
          label="Jesse's Juice Bar"
          onSelect={handleItemSelect}
        />

        <Card />
        <View style={styles.verticalMarginBox} />
        {test ? (
          <>
            <Dropdown
              data={data}
              label="All Zones"
              onSelect={handleItemSelect}
            />
            <View style={styles.verticalMarginBox} />
            <Dropdown
              data={data}
              label="Test Length - 2 hours"
              onSelect={handleItemSelect}
            />
            <View style={styles.verticalMarginBox} />
            <CustomTextInput
              secure={false}
              hintColor="#8E8E93"
              customHint="Comment"
            />
            <CustomTextInput secure={true} hintColor="#8E8E93" />
            <Button
              bgColor="#2b58bc"
              cbk={() => toastMessage('Place on Test')}
              textColor="#fff"
              title="Place on Test"
            />
          </>
        ) : (
          <>
            <Text>PHONE</Text>
            <ContactsCard />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TestContactScreen;
