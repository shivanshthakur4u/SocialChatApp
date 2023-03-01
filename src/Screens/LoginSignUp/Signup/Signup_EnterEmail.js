import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/PageCss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { formbtn, formHead2, formInput } from '../../../CommonCss/FormCss';
const Signup_EnterEmail = ({navigation}) => {


  const [email, setEmail] =useState('');
  const [isloading, setisloading] = useState(false);

  const handleEmail =()=>{
    // navigation.navigate('Signup_EnterVerificationCode')
    // setisloading(true);

    if(email == ''){
      alert('Please enter email');
    }
    else{
      setisloading(true);
      fetch('http://10.0.2.2:3000/verify',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email
        })
      }).then(res=>res.json().then(
        data =>{
          if(data.error === 'User Already Exist'){
            alert('User Already Exist');
            setisloading(false);
          }

          else if(data.message === "Message Sent"){
            setisloading(false);
            alert(data.message);
            navigation.navigate('Signup_EnterVerificationCode', {
              useremail: data.email,
              userVerificationCode: data.verificationCode
            })
          }
        }
      ))
    }
  }
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
      <Image style={logo1} source={logo} />
      <Text style={formHead2} >Create a new account</Text>
      <TextInput style={formInput} placeholder='Enter Your Email' onChangeText={(emailUser)=>{
        setEmail(emailUser);
      }} />
      {isloading ? <ActivityIndicator size="large" color="white"
      /> :<Text style={formbtn} onPress={()=>{

handleEmail()

}}>Next</Text> }
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})