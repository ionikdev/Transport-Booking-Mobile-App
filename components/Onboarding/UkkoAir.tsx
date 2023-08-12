import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "./onboarding.style";
import { Link } from "expo-router";

const UkkoAir = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ukko Market</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/onboarding/air.png")} // replace 'your-image.png' with your actual image name
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 40 }}>
        Ukko Air
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
      <Link href="/ukkoland" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#78B7FF",
            marginTop: 50,
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

export default UkkoAir;
