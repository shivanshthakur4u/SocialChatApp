import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { containerFull, logo1, goback} from '../../../CommonCss/PageCss'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter } from '../../../CommonCss/FormCss'
import logo from "../../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';

const FogotPassword_ChoosePassword = ({navigation, route}) => {

  const {email} = route.params;
  const [password, setpassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const handlePassword =()=>{
    // navigation.navigate('FogotPassword_AccountRecovered')

    if (password=='' || Cpassword==''){
      Alert.alert('Password and Confirm Password are required Fields')
    }

    else if (password !=Cpassword){
      Alert.alert('Password and Confirm Password must be same')
    }
    else{
      setisLoading(true);
      fetch('http://10.0.2.2:3000/fchangepassword',
      {method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({password:password, email:email})
    
    }).then(res=>{res.json().then(data=>{
      if(data.error == 'Error in changing Password'){
        Alert.alert(data.error);
      }
      else if (data.message=='Password Changed Successfully'){
        setisLoading(false);
        Alert.alert(data.message);
        navigation.navigate('FogotPassword_AccountRecovered')
      }
    })})
    }
  }
   
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.navigate('FogotPassword_EnterEmail')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead3}>Choose a strong password</Text>

      <TextInput style={formInput} placeholder={"Enter Password"} onChangeText={(text)=>{setpassword(text)}}/>
      <TextInput style={formInput} placeholder={"Confirm  Password"} onChangeText={(text)=>{setCpassword(text)}}/>
     
       {isLoading ? <ActivityIndicator  size={'large'} color='white' /> :  <Text onPress={()=>handlePassword()} style={formbtn}>Next</Text>}
      
    </View>
  )
}
export default FogotPassword_ChoosePassword

const styles = StyleSheet.create({})