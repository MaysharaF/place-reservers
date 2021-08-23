import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.purple_300,
    borderRadius: 50,
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: "auto",
    marginRight: 23,
    marginBottom: 120,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
