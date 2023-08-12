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
import { Link, Stack, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profile = () => {
  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem("ACCESS_TOKEN");
      router.replace("/login"); // Assuming '/login' is the route for your login screen
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../../assets/images/dashboard/profile/pf.png")}
      />

      <Text style={styles.profileName}>Chika</Text>
      <Text style={styles.profileActionText}>View and Edit Profile</Text>
      <View style={styles.sectionList}>
        <TouchableOpacity
          onPress={() => {
            /* navigation to Account page */
          }}
        >
          <View style={styles.sectionItem}>
            <Text style={styles.sectionText}>Account</Text>
            <Image
              style={styles.arrowImage}
              source={require("../../assets/images/dashboard/profile/navarrow.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* navigation to How Ukko Market Works page */
          }}
        >
          <View style={styles.sectionItem}>
            <Text style={styles.sectionText}>How Ukko Market Works</Text>
            <Image
              style={styles.arrowImage}
              source={require("../../assets/images/dashboard/profile/navarrow.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* navigation to Contact Support page */
          }}
        >
          <View style={styles.sectionItem}>
            <Text style={styles.sectionText}>Contact Support</Text>
            <Image
              style={styles.arrowImage}
              source={require("../../assets/images/dashboard/profile/navarrow.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* navigation to Legal page */
          }}
        >
          <View style={styles.sectionItem}>
            <Text style={styles.sectionText}>Legal</Text>
            <Image
              style={styles.arrowImage}
              source={require("../../assets/images/dashboard/profile/navarrow.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogout}>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor="#F9FAFB" barStyle="dark-content" />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <Link href="/dashboard" asChild>
              <TouchableOpacity>
                <View style={styles.backButton}>
                  <Image
                    style={{ width: 14, height: 14, resizeMode: "contain" }}
                    source={require("../../assets/images/dashboard/back.png")}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    paddingHorizontal: 20,
    gap: 5,
    marginTop: 30,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // This makes the image rounded
    margin: 20, // Margin to separate it from other elements
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 24,
  },
  profileActionText: {
    color: "#000",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
  },

  sectionList: {
    marginTop: 40,
    width: "90%",
    gap: 10,
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30, // Spacing between items
    paddingHorizontal: 10,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowImage: {
    width: 17, // Adjust size as required
    height: 17,
    resizeMode: "contain",
  },
});
