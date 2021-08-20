import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

interface IProps {
  title: string;
  placeholder: string;
  inputType: any;
}

const InputAuth: React.FC<IProps> = ({ title, placeholder, inputType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={inputType}
      />
    </View>
  );
};

export default InputAuth;
