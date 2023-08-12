import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type CardProps = {
  title: string;
  content: string;
  image?: ImageSourcePropType;
};

const Card = ({ title, content, image }: CardProps) => (
  <View style={styles.cardContainer}>
    <View style={{ flexDirection: "row", gap: 5 }}>
      {image && (
        <View>
          <Image
            style={{ width: 96, height: 89, resizeMode: "contain" }}
            source={image}
          />
        </View>
      )}

      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ gap: 5 }}>
          <Text style={{ fontWeight: "600", fontSize: 12 }}>Atinuke</Text>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Motorboat</Text>

          <Text
            style={{
              marginTop: 3,
              fontWeight: "500",
              fontSize: 12,
              opacity: 0.5,
            }}
          >
            Pickup
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 10 }}>
            Thu, 15 Jul 12:00am
          </Text>
        </View>
        <View style={styles.cardunderline}></View>
        <View style={{ gap: 5 }}>
          <Text style={{ fontWeight: "600", fontSize: 12 }}>$23.0/day</Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 8,
              textDecorationLine: "underline",
            }}
          >
            US$128 est.total
          </Text>

          <Text
            style={{
              fontWeight: "600",
              fontSize: 12,
              marginTop: 10,
              opacity: 0.5,
            }}
          >
            Return
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 10 }}>
            Fri, 15 Jul 12:00am
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const Trip = () => {
  const [selectedSection, setSelectedSection] = useState<
    "booked" | "history" | null
  >("booked");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F9FAFB" barStyle="dark-content" />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",

          headerLeft: () => (
            <TouchableOpacity>
              <View>
                <Text style={styles.backText}>Trips</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.sections}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedSection("booked")}
        >
          <Text
            style={[
              styles.title,
              selectedSection === "booked"
                ? { fontWeight: "bold", color: "black" }
                : { color: "grey" },
            ]}
          >
            Booked
          </Text>
          {selectedSection === "booked" && <View style={styles.underline} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedSection("history")}
        >
          <Text
            style={[
              styles.title,
              selectedSection === "history"
                ? { fontWeight: "bold", color: "black" }
                : { color: "grey" },
            ]}
          >
            History
          </Text>
          {selectedSection === "history" && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>

      {selectedSection === "booked" && (
        <View style={styles.content}>
          <View style={styles.content}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Most Recent
            </Text>
            <Card
              title="Recent Trip Title"
              content="Details about the recent trip..."
              image={require("../../assets/images/dashboard/trip/water.png")}
            />

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Oldest
            </Text>

            <Card
              title="Oldest Trip Title"
              content="Details about the oldest trip..."
              image={require("../../assets/images/dashboard/trip/land.png")}
            />
            <Card
              title="Oldest Trip Title"
              content="Details about the oldest trip..."
              image={require("../../assets/images/dashboard/trip/bic.png")}
            />
          </View>
        </View>
      )}

      {selectedSection === "history" && (
        <View style={styles.content}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell]}>
              <Text style={styles.tableHeader}>Transaction Date</Text>
            </View>
            <View style={[styles.tableCell]}>
              <Text style={styles.tableHeader}>Vehicle</Text>
            </View>
            <View style={[styles.tableCell]}>
              <Text style={styles.tableHeader}>Amount Paid</Text>
            </View>
          </View>
          {/* Table Body */}
          {/* You can repeat the following block for each row of data */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>2023-08-11</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>Ship</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>US$500</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>2023-08-11</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>Yatcht</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>US$500</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>2023-08-11</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>Bicycle</Text>
            </View>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <Text style={styles.tableData}>US$500</Text>
            </View>
          </View>
          {/* End of Table Body */}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Trip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },

  backText: {
    color: "#000",
    fontSize: 28,
    paddingHorizontal: 20,
    fontWeight: "900",
    marginTop: 20,
  },
  sections: {
    flexDirection: "row",
    marginTop: 70,
  },

  button: {
    padding: 5,
    paddingTop: 10,
    alignItems: "center",
    margin: 5,

    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  underline: {
    height: 2,
    backgroundColor: "#78B7FF",
    marginTop: 5,
    width: "80%",
  },
  cardunderline: {
    height: 2,
    backgroundColor: "#000",
    alignSelf: "flex-end",
    marginBottom: 30,
    opacity: 0.5,
    width: "7%",
  },

  cardContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 0.7,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardContent: {
    marginTop: 5,
    fontSize: 14,
  },
  tableRow: {
    flexDirection: "row",
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(128, 128, 128, 0.2)",

    paddingVertical: 10,
  },
  tableCell: {
    paddingHorizontal: 5,
  },
  tableHeader: {
    fontWeight: "500",
    fontSize: 16,
    flexShrink: 0,
  },
  tableData: {
    fontSize: 14,
    alignSelf: "center",
  },
});
