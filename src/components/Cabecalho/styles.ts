import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "12%",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  titleContent: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonLogout: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.purple_300,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  titleButton: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: "bold",
  },
});
