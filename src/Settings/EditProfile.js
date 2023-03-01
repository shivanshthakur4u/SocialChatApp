import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead, formHead2 } from '../CommonCss/FormCss';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditProfile = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon} onPress={()=>{
        navigation.goBack();
      }}/>
      <Text style={formHead}>Edit Profile</Text>

      <Text style={styles.text1}  onPress={()=>navigation.navigate('ChangeProfilePic')}> Change Profile Picture </Text>
      <Text style={styles.text1} onPress={()=>navigation.navigate('ChangeUsername')}> Change Username </Text>
      <Text style={styles.text1} onPress={()=>navigation.navigate('ChangeDescription')}> Change Description </Text>
     
      
    </View>
  )
}

export default EditProfile

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