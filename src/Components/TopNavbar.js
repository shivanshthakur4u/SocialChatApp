import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import { icon1, logo2 } from '../CommonCss/PageCss'
import { Ionicons } from '@expo/vector-icons';

const TopNavbar = () => {
  return (
    <View style={styles.container}>
    <Image source={logo} style={logo2}/>
    <Ionicons style={icon1} name="chatbubbles" size={24} color="black" />
    </View>
  )
}

export default TopNavbar

const styles = StyleSheet.create({
    container:{
flexDirection:"row",
justifyContent:'space-between',
alognItems:'center',
width:'100%',
paddingVertical:10,
position:'absolute',
top:0,
zIndex:100,
backgroundColor:"#111111"
    }
})