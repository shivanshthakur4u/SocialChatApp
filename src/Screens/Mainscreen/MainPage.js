import { StyleSheet, Text, View,StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import BottomNavbar from '../../Components/BottomNavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const MainPage = ({navigation, route}) => {

  const [userData , setuserData] = useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('user').then(data=>{
      setuserData(JSON.parse(data))
    })
  },[])
  

  return (
    <View style={styles.container}>
    <StatusBar/>
    <TopNavbar navigation={navigation} page={"MainPage"}/>
    <BottomNavbar navigation={navigation} page={"MainPage"} />
      <FollowersRandomPost/>
      
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    paddingVertical:50,
  }
})