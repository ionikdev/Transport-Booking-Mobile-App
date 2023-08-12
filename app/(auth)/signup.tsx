import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";
import SignUp from "@/components/Auth/SignUp";

const signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <SignUp />
      </View>
      <StatusBar backgroundColor="#F2F2F2" />
      {/* sign up */}
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href="/login" asChild>
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

export default signup;
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
