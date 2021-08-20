import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

interface IProps {
  title: string;
}

const ButtonAuth: React.FC<IProps> = ({ title }) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleLogin}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAuth;
