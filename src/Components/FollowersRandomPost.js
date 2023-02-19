import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post_Big_Card from '../cards/Post_Big_Card';

const FollowersRandomPost = () => {
    let data =[{
        id:1,
        username:'user1_123',
        image:"https://fragiledev.ml/assets/img/logo2.png",
        profilepic:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
        likes:[
            "saurabh_123",
            "shivansh_123"
        ],
        comments:[
            {
                id:1,
                username:"saurabh_123",
                comment:"nice post"
            },
            {
                id:2,
                username:"shivansh_123",
                comment:"nice post"
            }
        ]
    },

    {
        id:2,
        username:'user1_1234',
        image:"https://fragiledev.ml/assets/img/logo2.png",
        profilepic:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
        likes:[
            "saurabh_1234",
            "shivansh_1234"
        ],
        comments:[
            {
                id:1,
                username:"saurabh_1234",
                comment:"nice post"
            },
            {
                id:2,
                username:"shivansh_1234",
                comment:"nice post"
            }
        ]
    },

    {
        id:3,
        username:'user1_12345',
        image:"https://fragiledev.ml/assets/img/logo2.png",
        profilepic:"https://th.bing.com/th/id/OIP.Pm-QNnfOFOdVKwTs_NuIFQAAAA?pid=ImgDet&rs=1",
        likes:[
            "saurabh_12345",
            "shivansh_12345"
        ],
        comments:[
            {
                id:1,
                username:"saurabh_12345",
                comment:"nice post"
            },
            {
                id:2,
                username:"shivansh_12345",
                comment:"nice post"
            }
        ]
    }
]
// console.log(data);
  return (
    <ScrollView style={styles.container}>
        {data.map((item)=>{
return(<Post_Big_Card key={item.id} 
       username={item.username} 
       profilepic={item.profilepic} 
       post_pic={item.image} 
       likes={item.likes}
       comments={item.comments}

/>)
        })}
    </ScrollView>
  )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container:{
        width:"100%",
        fontSize:30,

    }
})