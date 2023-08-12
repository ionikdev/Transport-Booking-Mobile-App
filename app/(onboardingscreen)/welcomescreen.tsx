import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import WelcomeScreen from "@/components/Onboarding/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const welcomescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <WelcomeScreen />
      </View>
      <StatusBar style="dark" backgroundColor="#D4E8FF" />
      <Stack.Screen options={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default welcomescreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D4E8FF",
    width: "100%",
    flex: 1,
  },
});
