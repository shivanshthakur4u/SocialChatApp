import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import { containerFull, logo1, goback, row } from '../../../CommonCss/PageCss'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Signup_AccountCreated = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
    <Ionicons name='arrow-back' size={28} color="gray"/>
    <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
    <Image style={logo1} source={logo} />
   <View style={row}>
   <MaterialCommunityIcons name="check-decagram" size={24} color="#99B83C" />
   <Text style={formHead2}> Account Created Successfully</Text>
   </View>
    <Text style={formbtn} onPress={()=>{
      navigation.navigate('MainPage')
    }}>Let's Go</Text> 
  </View>
  )
}
export default Signup_AccountCreated

const styles = StyleSheet.create({})