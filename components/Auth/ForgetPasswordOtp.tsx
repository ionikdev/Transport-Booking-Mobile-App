import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import style from "./auth.style";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const ForgetPasswordOtp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const updateOtp = (number: any, index: any) => {
    let newArr = [...otp];
    newArr[index] = number;
    setOtp(newArr);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.profile}>
        <MaterialIcons name="person" size={100} color="white" />
      </View>
      <Text style={style.title}>Enter OTP</Text>
      <Text
        style={{
          fontSize: 16,
          color: "#0F0400",
          fontWeight: "300",
          textAlign: "center",
          paddingHorizontal: 40,
        }}
      >
        Enter the six digit code that was sent to your email.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 15,
        }}
      >
        {otp.map((digit, index) => (
          <TextInput
            style={styles.input}
            key={index}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(number) => updateOtp(number, index)}
            value={digit}
          />
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{}}> Resend Otp</Text>
        <Text style={{}}> 1.00</Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          gap: 10,
          width: "100%",
          marginTop: 30,
        }}
      >
        <Link href="/newforgetpassword" asChild>
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

export default ForgetPasswordOtp;

const styles = StyleSheet.create({
  input: {
    width: 60,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
});
