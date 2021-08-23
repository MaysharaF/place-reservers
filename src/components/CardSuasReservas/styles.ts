import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 124,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    marginTop: 14,
    borderRadius: 20,
    padding: 10,
    elevation: 1,
    alignSelf: "center",
  },
  nameArea: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3972E3",
    backgroundColor: "#D7f1fe",
    borderRadius: 20,
    width: 136,
    height: 28,
    textAlign: "center",
    paddingTop: 4,
  },
  dateEvent: {
    fontSize: 14,
    color: theme.colors.gray_200,
  },
  statusEvent: {
    fontSize: 12,
    color: "#718096",
    fontWeight: "bold",
    backgroundColor: "#CBD5E0",
    width: 95,
    height: 22,
    borderRadius: 4,
    textAlign: "center",
    paddingTop: 2,
    alignSelf: "flex-end",
  },
});
