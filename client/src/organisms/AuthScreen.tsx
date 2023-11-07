import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import Rectangle from '../atoms/Rectangle'
import Form from '../molecules/Form'
import styles from './styles/AuthScreen';


export function AuthScreen({authType} : {authType: string}) {
    return (
        <SafeAreaView style={styles.safeAreaView}>
        <Rectangle/>
        <Text style={styles.title}>
         { authType==="login" ? "Sign in to your account" : "Register to your account" }
        </Text>
        
        <Form authType= {authType} /> 
        
  
      </SafeAreaView>
    )
}

export default AuthScreen;