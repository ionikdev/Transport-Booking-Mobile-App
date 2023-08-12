import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import style from "./auth.style";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={style.container}>
      <View style={style.profile}>
        <MaterialIcons name="person" size={100} color="white" />
      </View>
      <Text style={style.title}>Sign Up</Text>
      <Text
        style={{
          fontSize: 16,
          color: "#0F0400",
          fontWeight: "300",
        }}
      >
        Create an account to get started
      </Text>

      <View style={{ marginTop: 15 }}>
        <View style={style.label}>
          <Image
            style={{ width: 28, height: 28, resizeMode: "contain" }}
            source={require("../../assets/images/auth/user.png")}
          />
          <Text style={{ fontSize: 16, opacity: 0.5 }}>Full name</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Full Name"
            onChangeText={setFullName}
            value={fullName}
          />
        </View>
      </View>
      <View>
        <View style={style.label}>
          <Image
            style={{ width: 28, height: 28, resizeMode: "contain" }}
            source={require("../../assets/images/auth/call.png")}
          />
          <Text style={{ fontSize: 16, opacity: 0.5 }}>Phone Number</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "column",
          gap: 10,
          width: "100%",
          marginTop: 30,
        }}
      >
        <Link href="/email" asChild>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#78B7FF",
              padding: 20,
              borderRadius: 12,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
