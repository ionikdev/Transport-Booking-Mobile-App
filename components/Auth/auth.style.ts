import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 90,
    gap: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 5,
  },
  profile: {
    backgroundColor: "#000",
    width: 108,
    height: 108,
    borderRadius: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 0.3,
    opacity: 0.5,
    borderColor: "rgba(8, 83, 237, 0.30)",
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  input: {
    marginLeft: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
});

export default styles;
