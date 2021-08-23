import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import firebase from "../../config/firebase";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IProps {
  titulo: string;
  icone: string;
}

const Header: React.FC<IProps> = ({ titulo, icone }) => {
  const navigation = useNavigation();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContent}>
          <Icon
            name={titulo}
            size={25}
            color="#322F3B"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.title}>{icone}</Text>
        </View>

        <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
          <Icon
            name="logout"
            size={25}
            color="#fff"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.titleButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
