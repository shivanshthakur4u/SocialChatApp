import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import TopNavbar from '../../Components/TopNavbar'
import BottomNavbar from '../../Components/BottomNavbar'
import { formHead } from '../../CommonCss/FormCss'


const Notifications = ({navigation}) => {
  return (
    <View style={styles.container}>

    <StatusBar navigation={navigation} />

   <TopNavbar navigation={navigation}  />

   <BottomNavbar navigation={navigation} page={"Notifications"} />

    <View style={styles.c1}>
      <View style={styles.Notificationbar}>
          <Text>Some Notification</Text>
      </View>
      <View style={styles.Notificationbar}>
          <Text>Some Notification</Text>
      </View>
      <View style={styles.Notificationbar}>
          <Text>Some Notification</Text>
      </View>
      <View style={styles.Notificationbar}>
          <Text>Some Notification</Text>
      </View>
    </View>
      
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    paddingVertical:50,
  },

  Notificationbar:{
    width:'98%',
    height:50,
    backgroundColor:"#111111",
    marginTop:18,
  },

  c1:{
   width:'100%',
   height:'100%',
   alignItems:'center'


  }
})