import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
export default function Layout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="dashboard"
        options={{ drawerLabel: "Ukko air", title: "Ukko air" }}
      />
      <Drawer.Screen
        name="ukkoland"
        options={{ drawerLabel: "Ukko land", title: "Ukko land" }}
      />
      <Drawer.Screen
        name="ukkowater"
        options={{ drawerLabel: "Ukko water", title: "Ukko water" }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
