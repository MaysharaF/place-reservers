import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const CardReservas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameArea}>Salão de Jogos</Text>
      <View style={styles.infoUser}>
        <Text style={styles.nameUser}>Mayshara Fernandes</Text>
        <Text style={styles.nameUser}>Nº 102</Text>
      </View>
      <Text style={styles.dateEvent}>
        <Icon
          name="watch"
          size={15}
          color={theme.colors.gray_200}
          style={{ marginRight: 5 }}
        />
        24 de Junho de 2021 - 14:00 às 16:30
      </Text>
      <Text style={styles.dateEvent}>
        <Icon
          name="people"
          size={15}
          color={theme.colors.gray_200}
          style={{ marginRight: 5 }}
        />
        5 pessoas
      </Text>
      <Text style={styles.statusEvent}>EM ABERTO</Text>
    </View>
  );
};

export default CardReservas;
