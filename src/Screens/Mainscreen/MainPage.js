import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/PageCss'
import { formHead } from '../../CommonCss/FormCss'
import BottomNavbar from '../../Components/BottomNavbar'
import TopNavbar from '../../Components/TopNavbar'

const MainPage = ({navigation}) => {
  return (
    <View style={containerFull}>
    <StatusBar/>
    <TopNavbar/>
    <BottomNavbar/>
      <Text style={formHead}>MainPage</Text>
      
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})