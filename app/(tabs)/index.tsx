import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '@/constants/Colors'; 
import { Stack } from 'expo-router';
import Header from '@/components/Header';
 

const Pages = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,  
        }}
      />
      <View style={[styles.container, {paddingTop:40}]}>
         <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{color:Colors.white}}>My Expenses</Text>
         </ScrollView>
      </View>
    </>
  );
};

export default Pages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
