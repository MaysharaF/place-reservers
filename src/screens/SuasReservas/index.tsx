import React from "react";
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";

import { theme } from "../../global/styles/theme";
import BotaoNavegacao from "../../components/BotaoNavegacao";

import EventImg from "../../assets/calendar.png";
import Cabecalho from "../../components/Cabecalho";

import { styles } from "./styles";

const YourReservers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Cabecalho icone="list" titulo="Suas Reservas" />

      <View style={styles.content}>
        <ScrollView>
          <Image source={EventImg} style={styles.image} />
          <Text style={styles.description}>
            Vamos cadastrar sua primeira {"\n"} reserva?
          </Text>

          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={styles.buttonAddLabel}>Adicionar</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao corLista={theme.colors.purple_300} />
        </View>
      </View>
    </View>
  );
};

export default YourReservers;
