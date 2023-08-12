import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const favourite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 50 }}>Favourite 🎉</Text>
      <StatusBar backgroundColor="#F9FAFB" barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default favourite;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
