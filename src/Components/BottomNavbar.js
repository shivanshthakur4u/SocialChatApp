import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/PageCss';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavbar = ({page}) => {
  const navigation= useNavigation();
  // console.log(page);
  return (
    <View style={styles.container}>
      {page === "MainPage" ?  <Entypo style={styles.activeicon1} name="home" size={24} color="black"  onPress={()=>{navigation.navigate("MainPage")}} />:
      <Entypo style={icon1} name="home" size={24} color="black"  onPress={()=>{navigation.navigate('MainPage')}} />}
    

      {page === 'Search' ?   <Feather style={styles.activeicon1} name="search" size={24} color="black"  onPress={()=>{navigation.navigate('Search')}} />:
      <Feather style={icon1} name="search" size={24} color="black"  onPress={()=>{navigation.navigate('Search')}} />
      }


      {page === 'Notifications' ?   <FontAwesome style={styles.activeicon1} name="heart-o" size={24} color="black"  onPress={()=>{navigation.navigate('Notifications')}}/>:
      <FontAwesome style={icon1} name="heart-o" size={24} color="black"  onPress={()=>{navigation.navigate('Notifications')}}/>
      }
 
      {page === 'userProfile' ?  <FontAwesome5 style={styles.activeicon1} name="user" size={24} color="black"    onPress={()=>{navigation.navigate('UserProfile')}}/>:
      <FontAwesome5 style={icon1} name="user" size={24} color="black"   onPress={()=>{navigation.navigate('UserProfile')}}/>
      }
     
     
      
     
    </View>
  )
}

export default BottomNavbar

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#111111',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:'absolute',
        bottom:0,
        width:"100%",
        zIndex:100,
        borderTopWidth:1,
        paddingVertical:10,
        alignItems:'center',
    },
    activeicon1:{
      backgroundColor:"white",
      borderRadius:50,
      fontsize:22,
      padding:10,
    }
})