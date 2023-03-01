import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

import logo from "../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';
import { containerFull, goback, logo1 } from '../../CommonCss/PageCss';
import { formbtn, formHead2, formInput } from '../../CommonCss/FormCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeUsername = ({navigation}) => {

  const [username, setusername]=useState('');
const [isLoading, setisLoading]=useState(false);

const handleusername =()=>{

  if(username ==''){
    Alert.alert("Username is must should not be empty ");
  }
  setisLoading(true)
    AsyncStorage.getItem('user').then(async data =>{
      fetch('http://10.0.2.2:3000/setusername',
      {method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + JSON.parse(data).token
      },
      body:JSON.stringify({email:JSON.parse(data).user.email, username:username})
    })
      .then(res=>res.json()
      .then(data=>{
          if(data.error == "Username Already Exist"){
            setisLoading(false)
            Alert.alert("Username is not available! try another one")
          }
          else if(data.message == "Username Changed Successfully"){
            setisLoading(false)
            Alert.alert(data.message);
            navigation.goBack();
          }
      }))
    })
  }

 
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead2}>Enter New Username</Text>
      <TextInput style={formInput} placeholder={"Enter Your New Username here"} onChangeText={(text)=>{
       setusername(text);
      }}/>
     
       {isLoading ? <ActivityIndicator  size='large' color='white'
       /> : <Text 
       onPress={()=>{
        handleusername()
       }} style={formbtn}>Save</Text>
      }

    </View>
  )
}

export default ChangeUsername

const styles = StyleSheet.create({})