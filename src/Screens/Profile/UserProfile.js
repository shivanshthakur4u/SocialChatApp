import { StyleSheet, Text, View,StatusBar, ScrollView, Image, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect,useState} from 'react';
import TopNavbar from '../../Components/TopNavbar';
import { formHead } from '../../CommonCss/FormCss';
import BottomNavbar from '../../Components/BottomNavbar';
import nopic from '../../../assets/usernopic.jpeg'
const UserProfile = ({navigation}) => {

  const [userData , setuserData] = useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('user')
    .then(async data=>{
      // setuserData(JSON.parse(data))
      fetch('http://10.0.2.2:3000/userProfile',
      {method:'POST',
      headers:{'Content-Type':'application/json',
    'Authorization':'Bearer ' + JSON.parse(data).token},
      body:JSON.stringify({email:JSON.parse(data).email})
    }).then(res=>{res.json().then(data=>{if(data.message == 'User Found'){
      setuserData(data.user)

    }
    else{
      alert('Login again')
      navigation.navigate('Login')
    }
  
  
  })}).catch(err=>{navigation.navigate('Login')})
    }).catch(err=>{alert(err)});
  },[])

  console.log('userdata:', userData)

  const data ={
    username:'saurabh@123',
    followers:10000,
    following:600,
    description:'mess with the best or die like the rest',
    profile_image:'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
    posts:[
      {
        id:1,
        post_image:'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
      },
      {
        id:2,
        post_image:'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
      },
      {
        id:3,
        post_image:'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
      },
      {
        id:4,
        post_image:'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
      },
      {
        id:5,
        post_image:'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
      }
    ]
  }


  return (
    <View style={styles.container}>
    <StatusBar />
    <TopNavbar navigation={navigation} page={"userProfile"} />
    <BottomNavbar navigation={navigation} page={"userProfile"}/>
    
    {userData ?<ScrollView>
      <View style={styles.c1}>
       {
        userData.profilepic.length > 0 ?  
        <Image style={styles.profilepic} source={{uri:userData.profilepic}}/>
        : <Image style={styles.profilepic} source={nopic}/>
       }
        <Text style={styles.text}>@{userData.username}</Text>
        <View style={styles.c11}>

          <View style={styles.c111}>
          <Text style={styles.text1}>Followers</Text>
          <Text style={styles.text2}>{ userData.followers.length>=999999 ? <Text>{userData.followers.length/1000}k</Text>:<Text>{userData.followers.length}</Text>
          }</Text>
          </View>
          <View style={styles.vr1}>

          </View>

          <View style={styles.c111}>
          <Text style={styles.text1}>Following</Text>
          <Text style={styles.text2}>{userData.following.length>=1000 ? <Text>{userData.following.length/1000}k</Text>:<Text>{userData.following.length}</Text>}</Text>
          </View>
          <View style={styles.vr1}>

          </View>
          <View style={styles.c111}>
          <Text style={styles.text1}>Posts</Text>
          <Text style={styles.text2}>{userData.posts.length>=1000 ? <Text>{userData.posts.length/1000}k</Text>:<Text>{userData.posts.length}</Text>}</Text>
          </View>

        </View>
       {userData.descrption.length > 0 &&  <Text  style={styles.description}>{userData.descrption}</Text>}
      </View>
      {
        userData.posts.length > 0 ? <View style={styles.c1}>
        <Text style={styles.text}>Your Posts</Text>
        <View style={styles.c13}>
          {userData.posts.map((items)=>{
            return(<Image style={styles.postPic} key={items.post} source={{uri:items.post}}/>)
          })}
        </View>
      </View> : <View style={styles.c2} >
        <Text style={styles.text1} >You have not posted anything yet</Text>
      </View>
      }
    </ScrollView>
       :<ActivityIndicator style={{marginTop:10}} size={'large'} color={'white'}/>}

    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    paddingVertical:50,
  },
  c1:{
    width:"100%",
    alignItems:'center',
  },
  profilepic:{
    width:120,
    height:120,
    borderRadius:60,
    margin:15,
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    backgroundColor:'#111111' ,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20,
   },
   text1:{
    color:'white',
    fontSize:15,
   },
   text2:{
    color:'white',
    fontSize:20,
   },
   c11:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    
   },
   c111:{
    alignItems:'center',
   },
   vr1:{
    width:1,
    height:50,
    backgroundColor:'white',
   },
   description:{
    color:'white',
    fontSize:15,
    marginVertical:10,
    textAlign:'center',
    width:'100%',
    backgroundColor:'#111111',
    padding:10,
    paddingVertical:10,
   },
   postPic:{
    width:"30%",
    height:120,
    margin:5,
   },
   c13:{
    flexDirection:'row',
    flexWrap:"wrap",
    marginBottom:20,
   },
   c2:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    height:200,
   }
})