import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import EnterPassword from "@/components/Auth/EnterPassword";
import { Stack, Link } from "expo-router";
const enterpassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <EnterPassword />
      </View>
      <StatusBar backgroundColor="#F2F2F2" />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Link href="/emailverification" asChild>
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

export default enterpassword;

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
