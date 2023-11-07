import { Text, View } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles/TestCard'

export class TestCard extends Component {
  render() {
    return (
        <View
        style={
            styles.Container
        }>
          <MaterialCommunityIcons name ='close-circle-outline' color="#EB3924" />
          <Text style ={styles.testText}>Not on Test</Text>
        </View>
    )
  }
}

export default TestCard