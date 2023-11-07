import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/Card';

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>ADDRESS</Text>
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <MaterialCommunityIcons name="map-marker" size={24} color="gray" />
        </View>
        <Text style={styles.rowItemText}>123 Main St</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <MaterialCommunityIcons name="phone" size={24} color="gray" />
        </View>
        <Text style={styles.rowItemText}>555-555-5555</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.rowItem}>
          <MaterialCommunityIcons name="phone" size={24} color="#2b58bc" />
        </View>
        <Text style={styles.rowItemText}>555-555-5555</Text>
      </View>
    </View>
  );
};

export default Card;
