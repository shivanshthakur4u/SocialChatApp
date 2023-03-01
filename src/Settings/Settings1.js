import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead, formHead2 } from '../CommonCss/FormCss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings1 = ({navigation}) => {
  const logout = ()=>{
    AsyncStorage.removeItem('user').then(()=>{ navigation.navigate('Login')})
   
  }
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon} onPress={()=>{
        navigation.goBack();
      }}/>
      <Text style={formHead}>Settings</Text>

      <Text style={styles.text1} onPress={()=>navigation.navigate('EditProfile')} >Edit Profile</Text>
      <Text style={styles.text1} onPress={()=>navigation.navigate('ChangePassword')}>Change Password</Text>
      <Text style={styles.text1}>Customer Support</Text>
      <Text style={styles.text1} onPress={()=>{logout()}}>Logout</Text>
    </View>
  )
}

export default Settings1

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"black",
        paddingVertical:50,
      },
      gohomeicon:{
        position:'absolute',
        top:15,
        left:15,
        zIndex:10,
        color:'white',
        fontSize:30,
    },
    text1:{
        marginTop:20,
        color:"white",
        fontSize:20,
        borderBottomColor:'grey',
        borderBottomWidth:1,
    }
})