import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 55,
    backgroundColor: theme.colors.purple_300,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    color: theme.colors.white,
    fontWeight: "bold",
  },
});
