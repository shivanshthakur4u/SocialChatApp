import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';
import { containerFull, logo1, goback } from '../CommonCss/PageCss'
import { formbtn, formHead2, formHead3, formInput, formTextLinkRight } from '../CommonCss/FormCss'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({navigation}) => {

  // console.log(username, email);
  const [oldpassword, setoldpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [Cnewpassword, setCnewpassword] = useState('');
  const [isLoading, setisloading] = useState(false);


  const handlePassword = ()=>{
    // navigation.navigate('Signup_AccountCreated')
       if(oldpassword == '' || newpassword == '' || Cnewpassword == ''){
        alert('All fields are Required');
       }
       else if( newpassword !== Cnewpassword){
        alert('Password and Confirm Password Must be Same ');
       }
      else {
        setisloading(true);

        AsyncStorage.getItem('user').then(async data=>{
            fetch('http://10.0.2.2:3000/changePassword',
            {method:'post', 
            headers:{ 'Content-Type':'application/json'},
             body:JSON.stringify({email:JSON.parse(data).user.email,oldpassword:oldpassword,newpassword:newpassword})
        }).then(res=>res.json().then(data=>{
            if(data.error === 'Something went Wrong'){
                Alert.alert(data.error);
            }
            else if (data.message === 'Password Changed Successfully'){
                setisloading(false);
                AsyncStorage.removeItem('user');
                Alert.alert(data.message);
                navigation.navigate('Login')
            }
            else{
                Alert.alert('Wrong Password');
                setisloading(false);
            }
        }))
                  
      })
    } 
  }
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={goback}>
    <Ionicons name='arrow-back' size={28} color="gray"/>
    <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
    </TouchableOpacity>
    <Image style={logo1} source={logo} />
    <Text style={formHead2} >Choose a strong password</Text>
    <TextInput secureTextEntry style={formInput} placeholder='Enter a Old Password'  onChangeText={(oldpassword)=>{
            setoldpassword(oldpassword);
    }}/>

<TextInput secureTextEntry style={formInput} placeholder='Enter New Password' onChangeText={(newpassword)=>{
             setnewpassword(newpassword);
    }} />
    <TextInput secureTextEntry style={formInput} placeholder='Confirm New Password' onChangeText={(cpassword)=>{
            setCnewpassword(cpassword);
    }} />
     <Text style={formTextLinkRight} onPress={()=>navigation.navigate('FogotPassword_EnterEmail')}>Forgot Password?</Text>
   {isLoading ? <ActivityIndicator size='large' color="white"
   /> : <Text style={formbtn} onPress={()=>{
     handlePassword();
    }}>Next</Text> }
  </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})