import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import Login from "@/components/Auth/Login";

const login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Login />
      </View>
      <StatusBar backgroundColor="#F2F2F2" />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerRight: () => (
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <View style={{ marginTop: 40 }}>
                  <Text
                    style={{
                      color: "#0853ED",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Sign up
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/welcomescreen" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                    source={require("../../assets/images/backarrow.png")}
                  />

                  <Text style={styles.backText}>Back</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    flex: 1,
  },

  backText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    opacity: 0.8,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 40,
  },
});
