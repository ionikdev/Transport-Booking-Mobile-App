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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosClient from "@/utils/axios-client";
import { Link, router } from "expo-router";
import axios, { isAxiosError } from "axios";
import Loading from "@/utils/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await axiosClient().post("/auth/login", {
        email: email,
        password: password,
      });

      console.log(response.data.data);

      if (response.status === 200) {
        const token = response.data.data.token;
        await AsyncStorage.setItem("ACCESS_TOKEN", token);
        router.replace("/dashboard");
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const response = error.response;
        if (response) {
          setError(response.data.message); // Directly use the message from the response
        } else {
          setError("An unknown error occurred. Please try again.");
        }
      } else {
        console.error("Unhandled error:", error);
      }
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.profile}>
        <MaterialIcons name="person" size={100} color="white" />
      </View>
      <Text style={style.title}>Login</Text>
      <Text
        style={{
          fontSize: 16,
          color: "#0F0400",
          fontWeight: "300",
          opacity: 0.5,
        }}
      >
        Enter your login details
      </Text>

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <View style={{ marginTop: 10 }}>
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
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
        </View>
      </View>
      <View>
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

      <Link href="/forgetpassword" asChild>
        <TouchableOpacity>
          <Text
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            {" "}
            Forget Password
          </Text>
        </TouchableOpacity>
      </Link>

      <View
        style={{
          flexDirection: "column",
          gap: 10,
          width: "100%",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#78B7FF",
            padding: 20,
            borderRadius: 12,
          }}
          onPress={onSignIn}
        >
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#BEDCFF",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 15,
            }}
          >
            <Image
              style={{ width: 24, height: 24, resizeMode: "contain" }}
              source={require("../../assets/images/auth/google.png")}
            />
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "700" }}
            >
              Sign in with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
