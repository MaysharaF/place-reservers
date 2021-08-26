import React from "react";
import { View, ScrollView } from "react-native";
import BotaoNavegacao from "../../components/BotaoNavegacao";
import CardReservas from "../../components/CardReservas";
import Cabecalho from "../../components/Cabecalho";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Reservas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Cabecalho icone="event" titulo="Reservas" />

      <View style={styles.content}>
        <ScrollView>
          <CardReservas />
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao corEvento={theme.colors.purple_300} />
        </View>
      </View>
    </View>
  );
};

export default Reservas;
