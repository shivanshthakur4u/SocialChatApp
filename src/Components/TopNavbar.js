import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png'
import { icon1, logo2 } from '../CommonCss/PageCss'
import { Ionicons } from '@expo/vector-icons';

const TopNavbar = ({navigation, page}) => {
  return (
    <View style={styles.container}>
    <Ionicons name="add-circle" style={icon1} size={24} color="black" onPress={()=>{
      navigation.navigate('AddPosts')
    }} />
    <Image source={logo} style={logo2}/>
    {page === 'MainPage' && <Ionicons style={icon1} name="chatbubbles" size={24} color="black" onPress={()=>{
      navigation.navigate('All_Chats')
    }}/>}

    {page === 'userProfile' && <Ionicons style={icon1} name="settings-sharp" size={24} color="black"  onPress={()=>{
      navigation.navigate('Settings1')
    }}/>}

    {page === ''}
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