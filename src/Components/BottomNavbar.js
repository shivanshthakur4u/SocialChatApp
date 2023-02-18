import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/PageCss';

const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      <Entypo style={icon1} name="home" size={24} color="black" />
      <Feather style={icon1} name="search" size={24} color="black" />
      <FontAwesome style={icon1} name="heart-o" size={24} color="black" />
      <FontAwesome style={icon1} name="user-circle" size={24} color="black" />
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
    }
})