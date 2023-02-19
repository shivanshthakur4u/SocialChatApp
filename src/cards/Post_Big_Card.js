import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/PageCss';

const Post_Big_Card = ({likes,comments, post_pic,profilepic,username}) => {
    const [isliked, setisliked]=useState(false);
    const [iscommentPressed, setcommentPressed]=useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
      <Image source={{uri:profilepic}} style={styles.profilepic}/>
      <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{uri:post_pic}} style={styles.postimage} />

      <View style={styles.s2}>
        {
            isliked ?  <View style={styles.s21}> 
            <FontAwesome style={styles.iconliked} name="heart" size={24} 
            color="black"  onPress={()=>{setisliked(false)}} />
            <Text style={styles.liked}>{likes.length+1}</Text>
            </View> :
            <View style={styles.s21}> 
            <FontAwesome style={icon1} name="heart-o" size={24} color="black" 
                onPress={()=>{setisliked(true)}}
            />
            <Text style={styles.notliked}>{likes.length}</Text>
            </View>
        }
        <View style={styles.s22}>
        <FontAwesome name="comment-o" size={24} color="black" style={icon1} onPress={()=>{
            setcommentPressed(!iscommentPressed)
        }} />
        </View>
      </View>
      {
        iscommentPressed == true && 
        <View style={styles.s3}>
            {comments.map((item,index)=>{
                return(<View style={styles.s31} key={item.id}>
                 <Text  style={styles.commentuser}>
                    {item.username}
                 </Text>
                 <Text style={styles.commenttext}>{item.comment}</Text>
                </View>)
            })}
        </View>
      }
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container:{
        width:"100%",
        // height:500,
        backgroundColor:"white",
        borderRadius:10,
        marginVertical:10,
        borderColor:'white',
        borderWidth:3,
    },
    c1:{
    width:"100%",
       flexDirection:'row',
      alignItems:"center",
          padding:10,
        backgroundColor:"black",

    },
    profilepic:{
        width:30,
        height:30,
        borderRadius:50,
        borderColor:"white",
        borderWidth:1,
    },
    username:{
        color:'white',
        marginLeft:10,
        fontSize:17,
        fontWeight:"bold",
    },
    postimage:{
        width:"100%",
        aspectRatio:1,
    },
    s2:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:"black",
        padding:10,
        alignItems:"center",
    },
    s21:{
        flexDirection:"row",
        // width:"100%",
        alignItems:'center'
    
    },
    notliked:{
        color:'grey',
        marginLeft:7,
        fontSize:25,
    },
    liked:{
color:"#DC143C",
marginLeft:7,
fontSize:25,
    }
    ,
    iconliked:{
color:"#DC143C",
fontSize:30,
    },

    s22:{
        marginLeft:10,
    },

    s3:{
        width:"100%",
        backgroundColor:"#111111",

    },
    commentuser:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        marginHorizontal:5,
    },
    commenttext:{
        color:'grey',
        fontSize:17,
        marginLeft:5,
    },
    s31:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5,
    }


})