import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from "../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';
import { containerFull, goback, logo1 } from '../../CommonCss/PageCss';
import { formbtn, formHead2, formHead3, formInput } from '../../CommonCss/FormCss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../../Firebase/Config';
import * as ImagePicker from 'expo-image-picker';
const ChangeProfilePic = ({navigation}) => {
  const [image, setimage] = useState(null);
 const [isLoading, setisloading] = useState(false);


 const pickImage = async ()=>{
     let result = await ImagePicker.launchImageLibraryAsync(
      {mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:1,
    })
    // console.log(result);

    if(!result.canceled){
      const source = {uri:result.uri};
      setimage(source);

      const response = await fetch(result.uri);
      const blob = await response.blob();
      const filename = result.uri.substring(result.uri);

      const ref = firebase.storage().ref().child(filename);
      const snapshot = await ref.put(blob);

      const url = await snapshot.ref.getDownloadURL();
      console.log(url);
      return url;
    }
    else{
      return url;

    }
 }
 const handleupload = ()=>{
// pickImage();
AsyncStorage.getItem('user').then(async data=>{
  setisloading(true);

   pickImage().then(url=>{
    if(url){  
  fetch('http://10.0.2.2:3000/userprofilepic',
  {method:'POST',
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Bearer ' + JSON.parse(data).token
  },
    body:JSON.stringify({email:JSON.parse(data).user.email, profilepic:url
    })
})
  .then(res=>res.json()
  .then(data=>{
      if(data.message === "Profile picture updated successfully"){
        setisloading(false);
        Alert.alert('Profile picture updated successfully');
        navigation.goBack();
      }
      else if(data.error === "Invalid Credentials"){
          setisloading(false);
          navigation.navigate('Login');
        
      }
      else{
        Alert.alert('Profile picture not updated successfully');
        navigation.goBack();
      }
  }))

    }
    else{
      Alert.alert('Please Select an image');
      setisloading(false)
    }
   })

})
 }

  
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
         <Image style={logo1} source={logo} /> 
     <Text style={formHead2}>Choose a Profile Picture</Text>

     
        {isLoading ? <ActivityIndicator size={'large'} color='white' /> :<Text onPress={()=>handleupload()} style={formbtn}>Upload</Text>}
      
    </View>
  )
}

export default ChangeProfilePic

const styles = StyleSheet.create({
  formStyle:{
    width:"80%",
    borderRadius:10,
    marginVertical:10,
    fontSize:18,
    borderBottomColor:'#fff',
    borderBottomWidth:1,
   color:'#fff',
   marginBottom:40,
  }
    
    
})