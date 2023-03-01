import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { formHead2 } from '../CommonCss/FormCss'
import nopic from '../../assets/usernopic.jpeg'
const UserCard = ({profilepic, userName,email,navigation}) => {
  return (
   <TouchableOpacity onPress={()=>{navigation.navigate('Other_UserProfile',{user:{userName, profilepic, email}})}}>
     <View style={styles.SearchCard}>
      {
        profilepic.length > 0 ? <Image style={styles.image} source={{uri:profilepic}}/> :<Image style={styles.image} source={nopic}/>
      }
      <View style={styles.c1}>
  <Text style={styles.username}>{userName}</Text>
      </View>
    </View>
   </TouchableOpacity>
  )
}

export default UserCard

const styles = StyleSheet.create({
  SearchCard:{
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

})