import { StyleSheet, Text, View,Image,TextInput, ActivityIndicator, Alert, AsyncStorage} from 'react-native'
import React, { useState } from 'react'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80, logo1 } from '../../../CommonCss/PageCss'
import { formbtn, formHead, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/FormCss'
const Login = ({navigation}) => {

const [emailEntered , setemailEntered]= useState('');
const [passwordEntered , setpasswordEntered]= useState('');
const [isLoading, setisLoading] = useState(false);

const  handlelogin=()=> {
//   navigation.navigate('Signup_EnterEmail')
if(emailEntered == '' || passwordEntered == ''){
  Alert.alert("All fields are required");
}

else{
  setisLoading(true);
  fetch('http://10.0.2.2:3000/login', 
  {method:'post', 
  headers:{'Content-Type':'application/json'}, 
  body:JSON.stringify({email:emailEntered, password:passwordEntered})})

  .then(res=>{res.json().then(async (data)=>{
    if(data.error == 'Invalid credentials'){
      setisLoading(false);
       Alert.alert(data.error);
    }
    else if (data.message == 'Signed in successfully'){
      setisLoading(false);
      Alert.alert('Signin Successfull');
      await AsyncStorage.setItem('user', JSON.stringify(data));
      navigation.navigate('MainPage',{data})
     
    }
  })}
    
  )
}

}


  return (
    <View style={containerFull}>
    <Image style={logo1} source={logo} />
    <Text style={formHead}>Login</Text>


    <TextInput placeholder='Enter Your Email' style={formInput} onChangeText={(text)=>{
      setemailEntered(text);
    }}/>
    <TextInput placeholder='Enter Your Password' style={formInput} secureTextEntry={true}  onChangeText={(text)=>{
      setpasswordEntered(text);
    }}/>

    <Text style={formTextLinkRight} onPress={()=>navigation.navigate('FogotPassword_EnterEmail')}>Forgot Password?</Text>
    {
      isLoading ? <ActivityIndicator size={'large'}  color={"white"}/> :<Text style={formbtn} onPress={()=>handlelogin()}>Submit</Text>
    }
    <Text style={hr80}></Text>
    <Text style={formTextLinkCenter}>Don't have an account? 
    <Text style={{color:'white'}} onPress={()=>navigation.navigate('Signup_EnterEmail')}>Signup</Text></Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})