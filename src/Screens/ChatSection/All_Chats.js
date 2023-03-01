import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { containerFull } from '../../CommonCss/PageCss'
import { Ionicons } from '@expo/vector-icons';
import { formHead } from '../../CommonCss/FormCss';
import ChatCard from '../../cards/ChatCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
const All_Chats = ({navigation}) => {
    let chat =[{
        username:'user1',
        lastMessage:"hi",
        time:'12:00',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user2',
        lastMessage:"hello",
        time:'12:10',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user3',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user4',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user5',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user6',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user7',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },

    {
        username:'user8',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    },
    {
        username:'user9',
        lastMessage:"hello",
        time:'12:20',
        profile_image:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
    }
]
 const [keyword, setkeyword]=useState('')
 const [Chat, setChat] = useState([])
const [isLoading ,setisLoading]=useState(false)


useEffect(()=>{
    loaddata();
 
},[])
const loaddata =()=>{
    AsyncStorage.getItem('user').then(async value=>{
        setisLoading(true)
        fetch('http://10.0.2.2:3000/getmessages',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.parse(value).user._id
        })
        .then(res=>res.json()
        .then(data=>{
           setChat(data)
        }))
    })
}
  return (
    <ScrollView style={styles.container} >
      <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon} onPress={()=>{
        navigation.navigate('MainPage')
      }}/>
      <View style={styles.c1}>
        <Text style={formHead}>
             Your Chats
        </Text>
        <TextInput  style={styles.searchbar} placeholder="Search" onChangeText={(text)=>{setkeyword(text)}}/>
      </View>
      <View style={styles.c2}>
            {
                Chat.map((item)=>{
                    return(<ChatCard key={item.username} chat={item}/>)
                })
            }
      </View>
    </ScrollView>
  )
}

export default All_Chats

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
    },
    c1:{
        width:'100%',
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:30,
        backgroundColor:"#111111",
        alignSelf:"center",
        borderRadius:20,
        borderColor:'white',
        borderWidth:1
    },
    c2:{
        width:"100%",
        padding:10,
    },
    gohomeicon:{
        position:'absolute',
        top:15,
        left:15,
        zIndex:10,
        color:'white',
        fontSize:30,
    },
    searchbar:{
        width:'95%',
        backgroundColor:'white',
        borderRadius:30,
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:10,
        fontSize:18,
    },
    c2:{

    }
})