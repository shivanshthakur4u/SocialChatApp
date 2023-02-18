import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, logo1, goback} from '../../../CommonCss/PageCss'
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter } from '../../../CommonCss/FormCss'
import logo from "../../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';

const FogotPassword_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead2}>Enter Your Email</Text>
      <TextInput style={formInput} placeholder={"Enter Your Registered Email"}/>
     
        <Text 
       onPress={()=>{
        navigation.navigate("FogotPassword_EnterVerificationCode")
       }} style={formbtn}>Next</Text>
      
    </View>
  )
}

export default FogotPassword_EnterEmail

const styles = StyleSheet.create({})