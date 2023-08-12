import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import UkkoAir from "@/components/Onboarding/UkkoAir";
const ukkoair = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <UkkoAir />
      </View>
      <StatusBar style="dark" backgroundColor="#D4E8FF" />
      <Stack.Screen options={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default ukkoair;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D4E8FF",
    width: "100%",
    flex: 1,
  },
});
