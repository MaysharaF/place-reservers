import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

interface IProps {
  title: string;
  placeholder: string;
  inputType: any;
  handleState: (name: string, value: string) => void;
  prop: string;
  secureTextEntry?: boolean;
}

const InputAuth: React.FC<IProps> = ({
  title,
  placeholder,
  inputType,
  handleState,
  prop,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={inputType}
        onChangeText={(value) => handleState(prop, value)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputAuth;
