import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  imageContainer: {
    width: "100%",
    height: "25%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    width: "100%",
    height: "75%",
    backgroundColor: theme.colors.gray_50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  formContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: theme.colors.brown_900,
    marginTop: 15,
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "60%",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "30%",
  },
  span: {
    fontWeight: "bold",
    color: theme.colors.purple_300,
  },
});
