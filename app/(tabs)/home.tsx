import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link, Stack, Tabs } from "expo-router";
import React from "react";

const images = [
  require("../../assets/images/dashboard/destination/lasvegas.png"),
  require("../../assets/images/dashboard/destination/miami.png"),
  require("../../assets/images/dashboard/destination/chicago.png"),
  require("../../assets/images/dashboard/destination/lagos.png"),
  require("../../assets/images/dashboard/destination/lasvegas.png"),
  require("../../assets/images/dashboard/destination/chicago.png"),
];

const data = [
  { title: "Las vegas", image: images[0] },
  { title: "Miami", image: images[1] },
  { title: "Chicago", image: images[2] },
  { title: "Lagos", image: images[3] },
  { title: "Title 5", image: images[4] },
  { title: "Title 5", image: images[5] },
];

const home = () => {
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
                  source={require("../../assets/images/dashboard/map.png")}
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
                  source={require("../../assets/images/dashboard/calanda.png")}
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
                source={require("../../assets/images/dashboard/filter.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={{ fontSize: 24, fontWeight: "800", marginBottom: 10 }}>
          {" "}
          Recently viewed
        </Text>
        <View>
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/dashboard/home/carcard.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 10 }}>
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
        </View>
      </View>

      <StatusBar backgroundColor="#F9FAFB" barStyle="dark-content" />

      <Tabs.Screen
        options={{
          title: "Home",
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <TabBarIconFoundation name="home" color={color} />
          // ),
        }}
      />
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

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 20,
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
    marginTop: 40,
  },

  header: {
    paddingTop: 20,
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
    marginTop: 20,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#F9FAFB",
  },

  itemContainer: {
    margin: 5,
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    marginTop: 5,
    fontWeight: "600",
  },
});
