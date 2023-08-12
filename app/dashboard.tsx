import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Link, Stack, router } from "expo-router";

const ITEM_WIDTH = 100; // Replace this with the actual width of your item

const images = [
  require("../assets/images/dashboard/destination/lasvegas.png"),
  require("../assets/images/dashboard/destination/miami.png"),
  require("../assets/images/dashboard/destination/chicago.png"),
  require("../assets/images/dashboard/destination/lagos.png"),
  require("../assets/images/dashboard/destination/lasvegas.png"),
  require("../assets/images/dashboard/destination/chicago.png"),
];

const data = [
  { title: "Las vegas", image: images[0] },
  { title: "Miami", image: images[1] },
  { title: "Chicago", image: images[2] },
  { title: "Lagos", image: images[3] },
  { title: "Title 5", image: images[4] },
  { title: "Title 5", image: images[5] },
];
const rideimages = [
  require("../assets/images/dashboard/ride/ukkoair.png"),
  require("../assets/images/dashboard/ride/ukkoland.png"),
  require("../assets/images/dashboard/ride/ukkoland.png"),
];

const rideData = [
  {
    key: 1,
    title: "ukkoland",
    rideimage: rideimages[0],
    route: "/home",
  },
  {
    key: 2,
    title: "ukkoair",
    rideimage: rideimages[1],
    route: "/trip",
  },
  {
    key: 3,
    title: "ukkowater",
    rideimage: rideimages[2],
    route: "/profile",
  },
];

const dashboard = () => {
  const scrollX = new Animated.Value(0);
  const scale = scrollX.interpolate({
    inputRange: [0, 100], // Modify these values to fit your desired scaling behavior
    outputRange: [1, 1.1],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 14, color: "#000000", opacity: 0.5 }}>
          {" "}
          Your Location
        </Text>
        <Text style={{ fontSize: 18, color: "#000000" }}>
          Umudike, phillipines
        </Text>
        {/* header */}
        <View>
          <View style={styles.minheader}>
            <View style={styles.location}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  borderRightWidth: 1,
                  borderRightColor: "#00000020",
                }}
              >
                <Image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                  source={require("../assets/images/dashboard/map.png")}
                />
                <View style={{ display: "flex", paddingRight: 15 }}>
                  <Text> Location</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", opacity: 0.3 }}
                  >
                    Chicago
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                  source={require("../assets/images/dashboard/calanda.png")}
                />
                <View style={{ display: "flex" }}>
                  <Text> Date</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", opacity: 0.3 }}
                  >
                    Aug/02/2390
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.location}>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../assets/images/dashboard/filter.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={{ fontSize: 24, fontWeight: "800" }}>
          {" "}
          Browse by destination
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          overScrollMode="auto"
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                style={styles.image}
                source={item.image} // Reference the imported image
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />

        <View style={styles.findDriver}>
          <Text style={{ fontSize: 24, fontWeight: "800", marginBottom: 30 }}>
            {" "}
            Find your ride near you
          </Text>

          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
            data={rideData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const scale = scrollX.interpolate({
                inputRange: [
                  (index - 1) * ITEM_WIDTH,
                  index * ITEM_WIDTH,
                  (index + 1) * ITEM_WIDTH,
                ],
                outputRange: [1, 0.9, 1],
                extrapolate: "clamp",
              });

              return (
                <TouchableOpacity>
                  <Link href={item.route}>
                    <Animated.View
                      style={[styles.rideContainer, { transform: [{ scale }] }]}
                    >
                      <View style={styles.imageContainer}>
                        <View style={styles.line}></View>
                        <Image
                          style={styles.rideImage}
                          source={item.rideimage}
                        />
                        <View style={styles.line}>
                          <Text style={styles.findDriver}>{item.title}</Text>
                        </View>
                      </View>
                    </Animated.View>
                  </Link>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <StatusBar
        animated
        barStyle={"dark-content"}
        backgroundColor="transparent"
      />
      <Stack.Screen options={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    marginTop: 70,
    backgroundColor: "#FFF",
    display: "flex",
    alignContent: "flex-start",
    marginHorizontal: 20,
    gap: 5,
  },
  minheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#D4E8FF",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  locationdate: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#D4E8FF",
    paddingVertical: 30,
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 15,
  },
  body: {
    display: "flex",
    flex: 1,
    width: "100%",
    marginTop: 50,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#F9FAFB",
  },

  itemContainer: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    marginTop: 5,
    fontWeight: "600",
  },

  rideContainer: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    overflow: "hidden",
    borderRadius: 20,
  },
  findDriver: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
  },
  line: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    paddingLeft: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  rideImage: {
    width: 210,
    height: 210,
    borderRadius: 20,
  },

  rideTitle: {
    marginTop: 5,
    fontWeight: "600",
  },
});
