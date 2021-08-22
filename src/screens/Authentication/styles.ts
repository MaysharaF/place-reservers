import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
    padding: "5%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infosContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "23%",
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: theme.colors.gray_200,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.purple_300,
  },
  description: {
    color: "#707070",
    fontSize: 14,
    marginTop: 13,
  },
  footerAuth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "37%",
    width: "100%",
    borderTopRightRadius: 52,
    borderTopLeftRadius: 52,

    elevation: 3.5,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 55,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.purple_300,
    borderStyle: "solid",
    elevation: 35,
  },
  titleButton: {
    fontSize: 20,
    color: theme.colors.purple_300,
    fontWeight: "bold",
  },
});
