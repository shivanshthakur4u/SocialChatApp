import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatCard = ({chat}) => {
  return (
    <View style={styles.chatCard}>
      <Image style={styles.image}source={{uri:chat.profile_image}}/>
      <View style={styles.c1}>
  <Text style={styles.username}>{chat.username}</Text>
  <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
      </View>
    </View>
  )
}

export default ChatCard

const styles = StyleSheet.create({
    chatCard:{
        width:"100%",
        backgroundColor:'#111111',
        marginVertical:10,
        marginTop:10,
        borderRadius:20,
        padding:10,
        flexDirection:'row',
        alignItems:"center"


    },
    image:{
        height:40,
        width:40,
        borderRadius:50,
    },
    username:{
        color:'white',
        fontSize:20,
        fontWeight:"bold",
    },
    c1:{
        marginLeft:20,
    },
    lastMessage:{
        color:'grey',
        fontSize:19,
    }
})