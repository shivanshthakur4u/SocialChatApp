import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { containerFull, logo1, goback} from '../../../CommonCss/PageCss'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/FormCss'
import logo from "../../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';

const FogotPassword_EnterVerificationCode = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('FogotPassword_EnterEmail')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead3}>A Verification Code sent to your Email</Text>
      <TextInput style={formInput} placeholder={"Enter 6-digit Verification Code"}/>
     
        <Text onPress={()=>navigation.navigate('FogotPassword_ChoosePassword')} style={formbtn}>Next</Text>
      
    </View>
  )
}

export default FogotPassword_EnterVerificationCode

const styles = StyleSheet.create({})