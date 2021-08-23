import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

interface IProps {
  titulo: string;
  placeholder: string;
  inputType: any;
  lidandoComEstado: (name: string, value: string) => void;
  prop: string;
  secureTextEntry?: boolean;
}

const InputAuth: React.FC<IProps> = ({
  titulo,
  placeholder,
  inputType,
  lidandoComEstado,
  prop,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={inputType}
        onChangeText={(value) => lidandoComEstado(prop, value)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputAuth;
