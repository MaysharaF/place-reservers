import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

interface IProps {
  title: string;
}

const ButtonAuth: React.FC<IProps> = ({ title }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ButtonAuth;
