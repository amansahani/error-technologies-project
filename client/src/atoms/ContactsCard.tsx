import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export function ContactsCard() {
    return (
        <>
      <View style= {styles.container}>
        <View style={styles.Circle}></View>
        <View style={styles.ContactInfo}>
        <Text style={styles.ContactText}>Jesse Brown</Text>
        <Text style={styles.ContactNumber}>(578) 57 46 42</Text>
        </View>
      </View>
   
      <View style= {styles.container}>
        <View style={styles.Circle}></View>
        <View style={styles.ContactInfo}>
        <Text style={styles.ContactText}>Jesse Brown</Text>
        <Text style={styles.ContactNumber}>(578) 57 46 42</Text>
        </View>
      </View>
      </>
    )
  }


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'gray',
        shadowRadius: 200,
        shadowOpacity: 0.3,
        elevation:1,
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'white',
        marginBottom: 2
    },
    Circle:{
        marginRight: '8%',
        marginLeft: '2%',
        backgroundColor: 'gray',
        borderRadius: 100,
        width : 20,
        height : 20,
    },
    ContactInfo:{
        flexDirection: 'column',
    },
    ContactText:{
        marginBottom: 2,
        fontFamily: 'Inter',
        color: 'black',
    },
    ContactNumber:{
        color: 'gray',
        fontSize:12
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        marginLeft:45,
        width: '87%',
        alignItems: 'flex-end'
      },
})
export default ContactsCard