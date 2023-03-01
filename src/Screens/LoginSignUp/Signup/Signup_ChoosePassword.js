import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import { containerFull, logo1, goback } from '../../../CommonCss/PageCss'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'

const Signup_ChoosePassword = ({navigation, route}) => {
  const {username, email} = route.params;
  // console.log(username, email);
  const [password, setpassword] = useState('');
  const [Cpassword, setCpassword] = useState('');

  const [isLoading, setisloading] = useState(false);


  const handlePassword = ()=>{
    // navigation.navigate('Signup_AccountCreated')
       if(password !== Cpassword){
        alert('Password and Confirm Password Must be Same');
       }
       else if(password == '' || Cpassword==''){
        alert('Password and Confirm Password Must not be Empty');
       }
      else {
        setisloading(true);
        fetch('http://10.0.2.2:3000/signup',
        {method:'post', headers:{ 'Content-Type':'application/json'}, body:JSON.stringify({email:email,username:username,password:password})
      })
        .then(res=>res.json().then(data=>{

          if(data.error=="Error occured in Registration"){
            setisloading(false);
          alert('User Registeration is Unsuccessful');
        }

        else if(data.message=="User registered successfully"){
          
          alert('User Registered  Successfully');
          navigation.navigate('Signup_AccountCreated');
        }
      
      })

        ).catch()
      }
  }
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
    <Ionicons name='arrow-back' size={28} color="gray"/>
    <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
    <Image style={logo1} source={logo} />
    <Text style={formHead2} >Choose a strong password</Text>
    <TextInput secureTextEntry style={formInput} placeholder='Enter a Password'  onChangeText={(fpassword)=>{
setpassword(fpassword);
    }}/>
    <TextInput secureTextEntry style={formInput} placeholder='Confirm Password' onChangeText={(cpassword)=>{
setCpassword(cpassword);
    }} />
   {isLoading ? <ActivityIndicator size='large' color="white"
   /> : <Text style={formbtn} onPress={()=>{
     handlePassword();
    }}>Next</Text> }
  </View>
  )
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})