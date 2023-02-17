import { StyleSheet, Text, View,Image,TextInput} from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80, logo1 } from '../../../CommonCss/PageCss'
import { formbtn, formHead, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/FormCss'
const Login = ({navigation}) => {
  return (
    <View style={containerFull}>
    <Image style={logo1} source={logo} />
    <Text style={formHead}>Login</Text>
    <TextInput placeholder='Enter Your Email' style={formInput}/>
    <TextInput placeholder='Enter Your Password' style={formInput} secureTextEntry={true}/>
    <Text style={formTextLinkRight} onPress={()=>navigation.navigate('FogotPassword_EnterEmail')}>Forgot Password?</Text>
    <Text style={formbtn} onPress={()=>navigation.navigate('MainPage')}>Submit</Text>
    <Text style={hr80}></Text>
    <Text style={formTextLinkCenter}>Don't have an account? 
    <Text style={{color:'white'}} onPress={()=>navigation.navigate('Signup_EnterEmail')}>Signup</Text></Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})