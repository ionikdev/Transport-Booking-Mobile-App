import {
  Foundation,
  Feather,
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { useColorScheme } from "react-native";

import Colors from "@/constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return (
    <AntDesign
      size={23}
      style={{ marginBottom: -2, fontWeight: "bold" }}
      {...props}
    />
  );
}
function TabBarIconIonicon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons
      size={23}
      style={{ marginBottom: -2, fontWeight: "bold" }}
      {...props}
    />
  );
}

function TabBarIconFeather(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return (
    <Feather
      size={20}
      style={{ marginBottom: -2, fontWeight: "bold" }}
      {...props}
    />
  );
}
function TabBarIconMaterialIcons(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return (
    <MaterialIcons
      size={20}
      style={{ marginBottom: -2, fontWeight: "bold" }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0853ED",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          padding: 6,
          height: 70,
          borderBlockStartColor: "#FFFFFF",
        },

        tabBarLabelStyle: {
          padding: 5,
          paddingBottom: 10,
          fontSize: 12,
          fontWeight: "bold",
          color: "#000000",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="trip"
        options={{
          headerShown: false,
          title: "Trip",
          tabBarIcon: ({ color }) => (
            <TabBarIconIonicon name="map-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          headerShown: false,
          title: "Favourite",
          tabBarIcon: ({ color }) => (
            <TabBarIconMaterialIcons name="favorite-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          headerShown: false,
          title: "Message",
          tabBarIcon: ({ color }) => (
            <TabBarIconFeather name="message-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIconIonicon name="ios-person-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
