import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    paddingHorizontal: 5,
  },
  content: {
    height: "88%",
    width: "100%",
    backgroundColor: theme.colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  menu: {
    height: "13%",
    width: "100%",
  },
  image: {
    height: 350,
    width: 350,
    alignSelf: "center",
  },
  description: {
    fontSize: 19,
    color: "#707070",
    alignSelf: "center",
  },
  buttonAdd: {
    width: 190,
    height: 52,
    alignSelf: "center",
    backgroundColor: theme.colors.purple_300,
    borderRadius: 8,
    elevation: 1,
    marginTop: 52,
  },
  buttonAddLabel: {
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 20,
    marginTop: 12.9,
  },
});
