import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import style from "./onboarding.style";
import { Link } from "expo-router";

const WelcomeScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Ukko Market</Text>

      <View style={styles.row}>
        <View style={styles.colume}>
          <Image
            style={styles.image1}
            source={require("../../assets/images/onboarding/welcome/land.png")}
          />
          <Image
            style={styles.image4}
            source={require("../../assets/images/onboarding/welcome/ship.png")}
          />
        </View>
        <View style={styles.colume}>
          <Image
            style={styles.image2}
            source={require("../../assets/images/onboarding/welcome/train.png")}
          />
          <Image
            style={styles.image5}
            source={require("../../assets/images/onboarding/welcome/bis.png")}
          />
        </View>
        <View style={styles.colume}>
          <Image
            style={styles.image3}
            source={require("../../assets/images/onboarding/welcome/air.png")}
          />
          <Image
            style={styles.image6}
            source={require("../../assets/images/onboarding/welcome/canue.png")}
          />
        </View>
      </View>

      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 40 }}>
        Welcome to Ukko
      </Text>
      <Text
        style={{
          textAlign: "center",
          paddingHorizontal: 60,
          lineHeight: 20,
          marginTop: 18,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Sem quisque sed porttitor
        condimentum viverra urna est malesuada.
      </Text>
      <Link href="/login" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#78B7FF",
            marginTop: 30,
            width: "80%",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}
          >
            Let's go
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colume: {
    flexDirection: "column",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  image1: {
    height: 139,
    width: 105,
    borderRadius: 12,
    resizeMode: "cover",
  },
  image2: {
    width: 105,
    height: 192,
    borderRadius: 12,
    resizeMode: "cover",
  },
  image3: {
    width: 105,
    height: 237,
    borderRadius: 12,
    resizeMode: "cover",
  },
  image4: {
    width: 105,
    height: 200,
    borderRadius: 12,
    resizeMode: "cover",
  },
  image5: {
    width: 105,
    height: 143,
    borderRadius: 12,
    resizeMode: "cover",
  },
  image6: {
    width: 105,
    height: 100,
    borderRadius: 12,
    resizeMode: "cover",
  },
});

export default WelcomeScreen;
