import { StyleSheet, Text, View,StatusBar, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { formHead, formHead3 } from '../CommonCss/FormCss'
import BottomNavbar from '../Components/BottomNavbar'
import TopNavbar from '../Components/TopNavbar'
import { searchbar } from '../CommonCss/PageCss'
import UserCard from '../cards/UserCard'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Search = ({navigation}) => {
 
const [userName , setuserName] = useState('');
const [isLoading, setisLoading] = useState(false);
const [data, setdata] = useState([]);
const [error, seterror] = useState('');

const handleSearch = async()=>{
  const data = await AsyncStorage.getItem('user')
  const dataobj = JSON.parse(data).user.email
if(userName.length >0){
  setisLoading(true);
  fetch('http://10.0.2.2:3000/searchUser',{method:"post",
headers:{
  'Content-Type':'application/json',
},

body:JSON.stringify({keyword:userName,email:dataobj})


})
  .then(res=>{res.json()
    .then(data=>{

      if(data.error === "No user found"){
        setdata([]);
       seterror(data.error);
        setisLoading(false);
      }
      else{
        seterror(null);
        setisLoading(false)
        setdata(data.user);
        
      }


  }).catch(err=>{
    setdata([]);
    setisLoading(false)
  })

})
}
else{
  setdata([]);
  seterror(null);

}
}

useEffect(()=>{
handleSearch();
},[userName])

  return (
    <View style={styles.container}>
    <StatusBar/>

    <TopNavbar navigation={navigation} />
    <BottomNavbar navigation={navigation} page={"Search"} />
      <TextInput  placeholder='Search By Username..' style={searchbar} onChangeText={(text)=>{
        setuserName(text);
      }}/>
     {isLoading ? <ActivityIndicator size='large' color="white" />
     :<>
       {
        error ? <Text style={[styles.text, styles.text2]}>{error}</Text> : <ScrollView style={styles.userList}>
        {data.map((item)=>{
          return <UserCard key={item.username} userName={item.username} profilepic={item.profilepic} navigation={navigation} email={item.email} />
        })}
      </ScrollView>}
     
       

     </>
    }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    paddingVertical:50,
  },
  userList:{
width:'100%',
marginTop:20,
  },
  text:{
    fontSize:20,
    color:'gray',
    textAlign:"center",
    fontWeight:'400',
    padding:10,
    borderRadius:10,
    width:"80%",
    marginVertical:10,
  },
  text2:{
marginLeft:20,
  }
})