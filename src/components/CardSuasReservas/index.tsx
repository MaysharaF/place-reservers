import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { Icon } from "react-native-elements";

import { styles } from "./styles";

interface IProp {
  nome: string;
  data_reserva: string;
  qtd_pessoa: number;
}

const CardSuasReservas: React.FC<IProp> = ({
  nome,
  data_reserva,
  qtd_pessoa,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameArea}>{nome}</Text>
      <Text style={styles.dateEvent}>
        <Icon
          name="watch"
          size={15}
          color={theme.colors.gray_200}
          style={{ marginRight: 5 }}
        />
        {data_reserva}
      </Text>
      <Text style={styles.dateEvent}>
        <Icon
          name="people"
          size={15}
          color={theme.colors.gray_200}
          style={{ marginRight: 5 }}
        />
        {qtd_pessoa}
      </Text>
      <Text style={styles.statusEvent}>EM ABERTO</Text>
    </View>
  );
};

export default CardSuasReservas;
