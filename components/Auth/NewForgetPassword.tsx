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

const NewEnterPassword = () => {
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={style.container}>
      <View style={style.profile}>
        <MaterialIcons name="person" size={100} color="white" />
      </View>
      <Text style={style.title}>Enter new code</Text>
      <Text
        style={{
          fontSize: 16,
          color: "#0F0400",
          fontWeight: "300",
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        Provide a strong and secure password
      </Text>

      <View style={{ marginTop: 15 }}>
        <View style={style.label}>
          <Image
            style={{ width: 28, height: 28, resizeMode: "contain" }}
            source={require("../../assets/images/auth/password.png")}
          />
          <Text style={{ fontSize: 16, opacity: 0.5 }}>Password</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
      </View>
      <View>
        <View style={style.label}>
          <Image
            style={{ width: 28, height: 28, resizeMode: "contain" }}
            source={require("../../assets/images/auth/password.png")}
          />
          <Text style={{ fontSize: 16, opacity: 0.5 }}> Confirm Password</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
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

export default NewEnterPassword;

const styles = StyleSheet.create({});
