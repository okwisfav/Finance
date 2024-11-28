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
      <View style={[styles.container, {paddingTop:50}]}>
         <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
              <View style={{gap: 10}}>
                <Text style={{color:Colors.white, fontSize: 16}}>
                   My <Text style={{fontWeight:700}}>Expenses</Text> 
                </Text>
                <Text style={{color:Colors.white, fontSize:36, fontWeight:700}}>$2000.<Text style={{fontSize:22, fontWeight:400 }}>00</Text></Text>
              </View>
              <View>
                  <Text style={{color:Colors.white}}>Pie Chart</Text>
              </View>
            </View>
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
