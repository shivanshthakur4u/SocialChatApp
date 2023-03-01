import { StyleSheet, Text, View,StatusBar, ScrollView, Image, ActivityIndicator, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect,useState} from 'react';
import TopNavbar from '../../Components/TopNavbar';
import { formHead } from '../../CommonCss/FormCss';
import BottomNavbar from '../../Components/BottomNavbar';
import nopic from '../../../assets/usernopic.jpeg'
const Other_UserProfile = ({navigation, route}) => {
    const {user} = route.params;

  const [userData , setuserData] = useState(null);
 

  const loadData = async () =>{
    
    fetch('http://10.0.2.2:3000/otheruserProfile',
    {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:user.email})
    }
    ).
    then(res=>res.json().then(data=>{
        if(data.message === "User Found"){
            setuserData(data.user)
            ismyprofile(data.user);
            checkfollowunfollow(data.user);
        }
        else{
            alert("User not found")
            navigation.navigate('Search');
        }
    })
    .catch(err=>
        {
            alert("Something Went wrong")
            navigation.navigate('Search');

}))
  }

  useEffect(()=>{
    loadData();
  },[])

  console.log('userdata:', userData)

//check own and other profile
const [isSameuser, setisSameuser]=useState(false)
const ismyprofile = (otherprofile)=>{
AsyncStorage.getItem('user').then(loggeduser=>{
  const loggedObj = JSON.parse(loggeduser);
  if(loggedObj.user.email == otherprofile.email){
setisSameuser(true);
console.log('same user')

  }
  else{
    setisSameuser(false);
    console.log('other user')

  }
})
}

//check follow unfollow
const [isfollowing, setisfollowing]=useState(false)
const checkfollowunfollow = (otheruser) =>{
AsyncStorage.getItem('user').then(async data=>{
  fetch('http://10.0.2.2:3000/checkfollow',{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({followfrom:JSON.parse(data).user.email, followto:otheruser.email})
}).then(res=>res.json()
.then(data=>{
  if(data.message === "user is in following list"){
    setisfollowing(true);
  }

  else if(data.message === "user not in following list"){
    setisfollowing(false);
  }
  else{
    alert("something went wrong")
  }
  
})
)
}
  
)
}


 //follow user
const followuser = async (otheruser)=>{
  const data = await AsyncStorage.getItem('user')
  const dataobj = JSON.parse(data)

  fetch('http://10.0.2.2:3000/followuser',
  {
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({followfrom:dataobj.user.email, followto:otheruser.email})
  })
  .then(res=>res.json()
  .then(data=>{
    if(data.message === "User followed"){
    setisfollowing(true)
    loadData()
    }
  }))
}


 //unfollow user
 const unfollowuser =(otheruser)=>{
 
  AsyncStorage.getItem('user').then(async data=>{
    fetch('http://10.0.2.2:3000/unfollowuser',{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({followfrom:JSON.parse(data).user.email, followto:otheruser.email})
  }).then(res=>res.json()
  .then(data=>{
    if(data.message === "User unfollowed"){
      setisfollowing(false);
      loadData();
    }
   
  })
  )
  }
    
  )
}

  return (
    <View style={styles.container}>
    <StatusBar />
    <TopNavbar navigation={navigation} page={"Other_UserProfile"} />
    <BottomNavbar navigation={navigation} page={"Search"}/>
    
    {userData ? <ScrollView>
      <View style={styles.c1}>
       {
        userData.profilepic.length > 0 ?  
        <Image style={styles.profilepic} source={{uri:userData.profilepic}}/>
        : <Image style={styles.profilepic} source={nopic}/>
       }
        <Text style={styles.text}>@{userData.username}</Text>
       {
        ! isSameuser && <View style={styles.row}>
          {
            isfollowing ? <Text style={styles.follow} onPress={()=>{unfollowuser(userData)}}>UnFolllow</Text>:<Text style={styles.follow} onPress={()=>{followuser(userData)}}>Folllow</Text>
          }
            <Text  style={styles.message} onPress={()=>{navigation.navigate('Chat_user',{fuseremail:userData.email, fuserid:userData._id})}}>Message</Text>
        </View>
       }
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
       {userData.description.length > 0 &&  <Text  style={styles.description}>{userData.description}</Text>}
      </View>
      {
        isfollowing || isSameuser ? <>
        {
        userData.posts.length > 0 ? <View style={styles.c1}>
        <Text style={styles.text}>User Posts</Text>
        <View style={styles.c13}>
          {userData.posts.map((items)=>{
            return(<Image style={styles.postPic} key={items._id} source={{uri:items.post}}/>)
          })}
        </View>
      </View> : <View style={styles.c2} >
        <Text style={styles.text1} >User have not posted anything yet</Text>
      </View>
      }
        </> : <Text style={{textAlign:"center", color:"#fff", fontSize:18, marginTop:30}}>Follow to see posts</Text>
      }
    </ScrollView>
       :<ActivityIndicator style={{marginTop:10}} size={'large'} color={'white'}/>}

    </View>
  )
}

export default Other_UserProfile



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
   },
   follow:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    backgroundColor:'#0AD6A0',
    paddingVertical:10,
    paddingHorizontal:50,
    borderRadius:20,
   },
   message:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    margin:10,
    backgroundColor:'#2F58CD',
    paddingVertical:10,
    paddingHorizontal:50,
    borderRadius:20,
   },

   row:{
       flexDirection:'row'
   }
})










