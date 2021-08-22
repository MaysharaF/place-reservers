import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "85%",
    padding: 10,
  },
  inputBox: {
    width: "100%",
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
    backgroundColor: theme.colors.gray_50,
    paddingHorizontal: 14,
    fontSize: 14,
  },
  textArea: {
    borderRadius: 9,
    height: 80,
    backgroundColor: theme.colors.gray_50,
    paddingHorizontal: 14,
    fontSize: 14,
  },
  saveContet: {
    width: "100%",
    height: "15%",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
  },
  buttonSave: {
    backgroundColor: theme.colors.green_300,
    color: theme.colors.white,
    width: 128,
    height: 36,
    borderRadius: 16,
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSave: {
    fontWeight: "bold",
    fontSize: 16,
    color: theme.colors.white,
    textTransform: "uppercase",
  },
});
