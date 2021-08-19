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
    height: "37%",
    width: "100%",
    borderRadius: 52,
    backgroundColor: "pink",
  },
});
