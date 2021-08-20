import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 76,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: theme.colors.gray_200,
    marginLeft: 15,
    marginBottom: 5,
  },
  input: {
    borderRadius: 9,
    height: 52,
    backgroundColor: theme.colors.white,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
  },
});
