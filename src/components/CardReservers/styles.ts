import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 162,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    marginTop: 14,
    borderRadius: 20,
    padding: 10,
    elevation: 1,
  },
});
