import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Post_Big_Card from '../cards/Post_Big_Card';
import AsyncStorage from '@react-native-async-storage/async-storage';



const FollowersRandomPost = () => {
 const [loading, setLoading] = useState(false)
 const [data, setData] = useState([])
   

 let Data=[];
 useEffect(()=>{
    const loadData =()=>{
        AsyncStorage.getItem('user').then(async data=>{
            setLoading(true)
            fetch('http://10.0.2.2:3000/showfollowingpost',{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({myemail:JSON.parse(data).user.email})
            }).then(res=>res.json().then(async data=>{
                if(data.message == "user post data"){
                    setLoading(false)
               await Data.push(data)
               setData(data.user)
                 
                }
                
            })).catch(err=>{
                console.log(err);
            })
        })
       }
    loadData();
     },[])




    
return loading ? (<ActivityIndicator /> ):(
    <>
        {
            <ScrollView style={styles.container}>
    {
        Data?.map((item,index) => {
            return (
                <Post_Big_Card
                    key={item._id}
                    username={item.username}
                    profilepic={item.profilepic}
                    posts={item.posts}
                    likes={item.likes}
                    comments={item.comments}
                />
            )
       })
     }
</ScrollView>
         }
    </>
 )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container:{
        width:"100%",
        fontSize:30,

    }
})