import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from "../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';
import {firebase} from '../../Firebase/Config';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { containerFull, goback, logo1 } from '../../CommonCss/PageCss';
import { formbtn, formHead2 } from '../../CommonCss/FormCss';

const AddPosts = ({navigation}) => {
 const [description ,setdescription] = useState('');
 const [isLoading1, setisloading1] = useState(false);
 const [isLoading2, setisloading2] = useState(false);
 const [post , setPost] = useState('')

const pickImage=async ()=>{
    setisloading1(true)

    let result = await ImagePicker.launchImageLibraryAsync(
        {mediaTypes:ImagePicker.MediaTypeOptions.Images,
          allowsEditing:true,
          aspect:[1,1],
          quality:1,
      })
      // console.log(result);
  
      if(!result.canceled){
        const source = {uri:result.uri};

        const response = await fetch(result.uri);
        const blob = await response.blob();
        const filename = result.uri.substring(result.uri);
  
        const ref = firebase.storage().ref().child(filename);
        const snapshot = await ref.put(blob);
  
        const url = await snapshot.ref.getDownloadURL();
        // console.log(url);
        setisloading1(false);
        setPost(url)
       
      }
      else{
        setisloading1(false)
        setPost(null);
  
      }


}



 const handleupload=()=>{
    
   if(post != null){
    AsyncStorage.getItem('user').then(async data=>{
        setisloading2(true);
        fetch('http://10.0.2.2:3000/userPost',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + JSON.parse(data).token,
            },
            body:JSON.stringify({email:JSON.parse(data).user.email, post:post, postdescription:description})
        }).then(res=>{res.json().then(data=>{
            if(data.error === "Invalid Credentials"){
                Alert.alert("Invalid Credentials");
            }
            else if(data.message === "Post added successfully"){
                Alert.alert("Post added successfully");
                setisloading2(false);
                navigation.goBack();
            }
            else{
                Alert.alert('Something went Wrong');
            }

        })})
    })
   }

   else{
    Alert.alert("please select an Image");
   }
   
 }

  
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} /> 


{isLoading1 ? <ActivityIndicator size={'large'} color="white" />:

<>
<Text style={formHead2}>Add New Post</Text>
{
    post ? <TouchableOpacity onPress={()=>{ImagePicker()}}>
        <Image source={{uri:post}} style={{width:100, height:100, marginVertical:10}} />
    </TouchableOpacity> :<Text style={styles.adpost} onPress={()=>{pickImage()}}>Click here to select a post</Text>
}
</>


}

<Text style={formHead2}>Enter Your Picture Description</Text>

      <TextInput style={styles.formStyle}
        editable
        multiline
        numberOfLines={4}
        maxLength={40} onChangeText={(text)=>{
          setdescription(text)
        }}/>
     
        {isLoading2 ? <ActivityIndicator size={'large'} color='white' /> :<Text onPress={()=>handleupload()} style={formbtn}>Upload</Text>}
      
    </View>
  )
}

export default  AddPosts

const styles = StyleSheet.create({
  formStyle:{
    width:"80%",
    borderRadius:10,
    marginVertical:10,
    fontSize:18,
    borderBottomColor:'blue',
    borderBottomWidth:1,
   color:'#fff',
   marginBottom:40,
  },
  adpost:{
    fontSize:20,
    fontWeight:'100',
    color:'#fff',
    borderColor:'#fff',
    borderWidth:1,
    borderRadius:10,
    paddingVertical:50,
    width:'80%',
    textAlign:"center",
    marginVertical:20,
  }
    
    
})