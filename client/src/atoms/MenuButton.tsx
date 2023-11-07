import { Text, View } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles/MenuButton'

export class MenuButton extends Component {
  render() {
    return (
        <View style={styles.menuButton}>
              <MaterialCommunityIcons name='menu' color='black' size = {30} />
        </View>
    )
  }
}

export default MenuButton