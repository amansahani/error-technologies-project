import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ZoneScreen from '../pages/ZoneScreen';
import HistoryScreen from '../pages/HistoryScreen';
import ContactScreen from '../pages/Contacts';
import TestScreen from '../pages/Test';

const Tab = createMaterialBottomTabNavigator();

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
