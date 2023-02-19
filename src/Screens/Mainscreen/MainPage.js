import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/PageCss'
import { formHead } from '../../CommonCss/FormCss'
import BottomNavbar from '../../Components/BottomNavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar/>
    <TopNavbar navigation={navigation}/>
    <BottomNavbar navigation={navigation} />
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