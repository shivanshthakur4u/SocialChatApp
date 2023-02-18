import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image, TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/PageCss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { formbtn, formHead2, formInput } from '../../../CommonCss/FormCss';
const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
      <Image style={logo1} source={logo} />
      <Text style={formHead2} >Create a new account</Text>
      <TextInput style={formInput} placeholder='Enter Your Email' />
      <Text style={formbtn} onPress={()=>{
        navigation.navigate('Signup_EnterVerificationCode')
      }}>Next</Text> 
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})