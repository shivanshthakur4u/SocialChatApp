import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from "../../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';
import { containerFull, goback, logo1 } from '../../CommonCss/PageCss';
import { formbtn, formHead2, formHead3, formInput } from '../../CommonCss/FormCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeDescription = ({navigation}) => {
 const [description ,setdescription] = useState('');
 const [isLoading, setisloading] = useState(false);

 const handleDesciptionChange =()=>{
    if(description == ''){
      Alert.alert('Description should not be empty');
    }
    else{
      setisloading(true);
      AsyncStorage.getItem('user').then(async data=>{
        fetch('http://10.0.2.2:3000/setDescription',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + JSON.parse(data).token
          },
          body:JSON.stringify({email:JSON.parse(data).user.email, description:description})

        }).then(res=>res.json().then(data =>{
                
          if(data.error == "User Doesn't Exist"){
            setisloading(false);
            Alert.alert('Something went Wrong Login again Please');

          }
          else if(data.message == "Description Changed Successfully"){
            setisloading(false);
            Alert.alert(data.message);
            navigation.goBack();
          }
        })

        )

      }).catch(err=>{Alert.alert(err)});
    }
 }

  
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
<Image style={logo1} source={logo} />
<Text style={formHead2}>Enter Your Profile Description</Text>

      <TextInput style={styles.formStyle}
        editable
        multiline
        numberOfLines={4}
        maxLength={40} onChangeText={(text)=>{
          setdescription(text)
        }}/>
     
        {isLoading ? <ActivityIndicator size={'large'} color='white' /> :<Text onPress={()=>handleDesciptionChange()} style={formbtn}>Save</Text>}
      
    </View>
  )
}

export default ChangeDescription

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