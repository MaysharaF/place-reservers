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
  nameArea: {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.colors.red_300,
    backgroundColor: "#FED7D7",
    borderRadius: 20,
    width: 136,
    height: 28,
    textAlign: "center",
    paddingTop: 4,
  },
  infoUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameUser: {
    fontSize: 14,
    color: "#747474",
    fontWeight: "bold",
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
