import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ukkoland from "@/components/Onboarding/Ukkoland";
import { Stack } from "expo-router";

const ukkoland = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Ukkoland />
      </View>
      <StatusBar style="dark" backgroundColor="#D4E8FF" />
      <Stack.Screen options={{ headerShown: false }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D4E8FF",
    width: "100%",
    flex: 1,
  },
});

export default ukkoland;
