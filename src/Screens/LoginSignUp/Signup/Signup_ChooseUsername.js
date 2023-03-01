import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import { containerFull, logo1, goback } from '../../../CommonCss/PageCss'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'

const Signup_ChooseUsername = ({navigation, route}) => {
  const {email} = route.params;
  const [userName, setuserName] = useState('');
  const [isloading , setisloading] = useState(false);

  const handleUsername =()=>{
    // navigation.navigate('Signup_ChoosePassword')
   
    if(userName ==''){
      alert("Username is a required Field");
    }
    else{
      setisloading(true);
      fetch('http://10.0.2.2:3000/changeusername', {
        method:"post",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:userName
        })
      }).then(res=>res.json().then(data=>{
        if(data.error === "Username already Exist"){
            setisloading(false);
            alert(data.error);
        }
        else if(data.message === "Username Available"){
            setisloading(false);
            alert("Username has been set successfully");
            navigation.navigate('Signup_ChoosePassword',{
              username:userName,
              email:email
            })
        }
      })).catch(err=>{console.log(err);})
      
    }



  }
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
    <Ionicons name='arrow-back' size={28} color="gray"/>
    <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
    <Image style={logo1} source={logo} />
    <Text style={formHead2} >Choose a Username</Text>
    <TextInput style={formInput} placeholder='Enter a Username' onChangeText={(usernameEntered)=>{
      setuserName(usernameEntered);
    }} />
   {isloading ? <ActivityIndicator  size="large" color="white"
   /> : <Text style={formbtn} onPress={()=>{
     handleUsername();
    }}>Next</Text> }
  </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})

