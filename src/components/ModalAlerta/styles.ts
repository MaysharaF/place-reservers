import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    width: 200,
    height: 200,
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.brown_600,
    marginTop: 10,
  },
});
