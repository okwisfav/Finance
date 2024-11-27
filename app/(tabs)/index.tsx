import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
 
import Colors from '@/constants/Colors'

const Pages = () => {
  return (
    <View style={style.container}>
      <Text>Pages</Text>
    </View>
  )
} 

export default Pages

const style = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
   }

})