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

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={style.container}>
      <View style={style.profile}>
        <MaterialIcons name="person" size={100} color="white" />
      </View>
      <Text style={style.title}>Forgot password</Text>
      <Text
        style={{
          fontSize: 16,
          color: "#0F0400",
          fontWeight: "300",
          textAlign: "center",
          paddingHorizontal: 50,
        }}
      >
        Enter your phone number and we’ll send you an OTP code to reset your
        password.
      </Text>

      <View style={{ marginTop: 15 }}>
        <View style={style.label}>
          <Image
            style={{ width: 28, height: 28, resizeMode: "contain" }}
            source={require("../../assets/images/auth/mail.png")}
          />
          <Text style={{ fontSize: 16, opacity: 0.5 }}>Email Address</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Email Address"
            onChangeText={setEmail}
            value={email}
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
        <Link href="/forgetpasswordotp" asChild>
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

export default ForgetPassword;

const styles = StyleSheet.create({});
