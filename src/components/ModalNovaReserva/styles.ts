import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  form: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "85%",
    padding: 10,
  },
  inputBox: {
    width: "50%",
    height: "100%",
    marginRight: 3,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    marginBottom: 5,
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
    height: 55,
    width: "100%",
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
