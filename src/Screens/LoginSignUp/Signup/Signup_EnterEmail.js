import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goback } from '../../../CommonCss/PageCss'
import { Ionicons } from '@expo/vector-icons';

const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={goback}>
      <Ionicons name='arrow-back' size={28} color="gray"/>
      <Text style={{color:"gray",fontSize:16, marginLeft:5}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})