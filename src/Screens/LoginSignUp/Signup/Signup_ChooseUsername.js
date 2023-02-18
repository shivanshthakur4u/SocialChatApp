import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import { containerFull, logo1, goback } from '../../../CommonCss/PageCss'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'

const Signup_ChooseUsername = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
    <Ionicons name='arrow-back' size={28} color="gray"/>
    <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
    <Image style={logo1} source={logo} />
    <Text style={formHead2} >Choose a Username</Text>
    <TextInput style={formInput} placeholder='Enter a Username' />
    <Text style={formbtn} onPress={()=>{
      navigation.navigate('Signup_ChoosePassword')
    }}>Next</Text> 
  </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})

