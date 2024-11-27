import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors'; // Ensure the path to Colors is correct or define it inline
import { Stack } from 'expo-router';
import Header from '@/components/Header';
 

const Pages = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />, // Replace with your custom header if needed
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Pages</Text>
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
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',    // Center content horizontally
  },
  text: {
    color: Colors.white,
    fontSize: 18, // Optional: Adjust font size
  },
});
