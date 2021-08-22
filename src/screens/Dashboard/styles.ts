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
    backgroundColor: theme.colors.purple_100,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 10,
    position: "relative",
  },
});
