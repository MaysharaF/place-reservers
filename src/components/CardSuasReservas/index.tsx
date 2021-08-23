import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { Icon } from "react-native-elements";

import { styles } from "./styles";

const CardSuasReservas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameArea}>Espaço Pet</Text>
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

export default CardSuasReservas;
