import React from "react";
import { View, ScrollView } from "react-native";
import BotaoNavegacao from "../../components/BotaoNavegacao";
import CardReservas from "../../components/CardReservas";
import Header from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Reservers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header icon="event" title="Reservas" />

      <View style={styles.content}>
        <ScrollView>
          <CardReservas />
          <CardReservas />
          <CardReservas />
          <CardReservas />
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao colorEvent={theme.colors.purple_300} />
        </View>
      </View>
    </View>
  );
};

export default Reservers;
