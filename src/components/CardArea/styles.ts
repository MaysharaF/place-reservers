import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 135,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    marginTop: 14,
    borderRadius: 20,
    padding: 10,
    elevation: 1,
    alignSelf: "center",
  },
  infoArea: {
    width: "100%",
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
  },
  description: {
    fontSize: 13,
    color: theme.colors.gray_200,
  },
  actionContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantity: {
    backgroundColor: theme.colors.purple_300,
    color: theme.colors.white,
    fontSize: 14,
    width: 77,
    height: 28,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 20,
    padding: 4,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
  },
});
