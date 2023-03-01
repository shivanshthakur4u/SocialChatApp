import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import { containerFull, logo1, goback } from '../../../CommonCss/PageCss'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'

const Signup_EnterVerificationCode = ({navigation, route}) => {
  const {useremail, userVerificationCode} = route.params
//  console.log( useremail, userVerificationCode);

const [VerificationCode, setVerificationcode] = useState('');
const [isloading, setisloading] =useState(false);

const handleverificationCode = ()=>{
 
  if(userVerificationCode == VerificationCode){
    setisloading(true);
 navigation.navigate('Signup_ChooseUsername', {
  email:useremail
 })
  }
  else{
    alert('Enter Correct Code ')
    setisloading(false);
  }
}
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
    <Ionicons name='arrow-back' size={28} color="gray"/>
    <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
    <Image style={logo1} source={logo} />
    <Text style={formHead3} >A Verification code has been sent to your email</Text>
    <TextInput style={formInput} placeholder='Enter 6-Digit Code here' onChangeText={(code)=>{
      setVerificationcode(code);
    }} />
    {isloading ? <ActivityIndicator size="large" color="white" /> :<Text style={formbtn} onPress={()=>{
     handleverificationCode();
    }}>Next</Text>} 
  </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})