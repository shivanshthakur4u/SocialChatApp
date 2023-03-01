import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, logo1, goback} from '../../../CommonCss/PageCss'
import { formbtn, formHead, formHead2, formInput, formTextLinkCenter } from '../../../CommonCss/FormCss'
import logo from "../../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';



const FogotPassword_EnterEmail = ({navigation}) => {

  const [email, setemail]=useState('');
const [isLoading, setisLoading]=useState(false);

const handleEmailfp = ()=>{
  if(email==''){
    Alert.alert('Email is Required');
  }

  else{
    setisLoading(true);
    fetch('http://10.0.2.2:3000/forgotpassword',
    {method:'post',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({email:email})
  }).then(res=>{res.json().then(data=>{

    if(data.error == 'Email is not Registered'){
      setisLoading(false);
      Alert.alert(data.error)

    }

    else if(data.message == 'Message Sent'){
      setisLoading(false);
      Alert.alert('6 digit Verification code Sent To Your Email');
      navigation.navigate("FogotPassword_EnterVerificationCode",{verificationCode:data.verificationCode, email:data.email})
    }
  })})
  }
}


  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead2}>Enter Your Email</Text>
      <TextInput style={formInput} placeholder={"Enter Your Registered Email"} onChangeText={(text)=>{
        setemail(text);
      }}/>
     
       {isLoading ? <ActivityIndicator  size='large' color='white'
       /> : <Text 
       onPress={()=>{
        handleEmailfp();
       }} style={formbtn}>Next</Text>
      }

    </View>
  )
}

export default FogotPassword_EnterEmail

const styles = StyleSheet.create({})