import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import Colors from "../constants/Colors"; // Adjust the import path if using aliases
import { Stack } from "expo-router";
import Colors from "../../constants/Colors";


const Page = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black, //  Ensure Colors.black is defined
  },
  text: {
    color: Colors.white, // Ensure Colors.white is defined
  },
});
