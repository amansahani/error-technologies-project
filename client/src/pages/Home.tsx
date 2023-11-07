import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TestContactScreen from '../organisms/TestContactScreen';
import styles from './styles/TestContact';
import ZoneScreen from './ZoneScreen';
import HistoryScreen from './HistoryScreen';

const Tab = createMaterialBottomTabNavigator();

const TestScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
        <TestContactScreen screenType="test" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const ContactScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{color: '#000'}}>Contact Screen</Text>
    </View>
  );
};
function MyTabs() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#f6f6f6', shadowOpacity: 0}}
      activeColor="#2b58bc"
      initialRouteName="Test"
      shifting={false}>
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{
          tabBarLabel: 'Test',
          tabBarIcon: ({color}) => (
            <Icon name="circle-half-full" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color}) => (
            <Icon name="whatsapp" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Zone"
        component={ZoneScreen}
        options={{
          tabBarLabel: 'Zone',
          tabBarIcon: ({color}) => (
            <Icon name="vector-square-remove" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <Icon name="history" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
