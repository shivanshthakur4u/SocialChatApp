import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { containerFull, logo1, goback} from '../../../CommonCss/PageCss'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/FormCss'
import logo from "../../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';

const FogotPassword_ChoosePassword = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('FogotPassword_EnterEmail')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead3}>Choose a strong password</Text>
      <TextInput style={formInput} placeholder={"Enter Password"}/>
      <TextInput style={formInput} placeholder={"Confirm  Password"}/>
     
        <Text onPress={()=>navigation.navigate('FogotPassword_AccountRecovered')} style={formbtn}>Next</Text>
      
    </View>
  )
}
export default FogotPassword_ChoosePassword

const styles = StyleSheet.create({})