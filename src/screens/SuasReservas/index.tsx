import React, { useState } from "react";
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";

import { theme } from "../../global/styles/theme";

import BotaoNavegacao from "../../components/BotaoNavegacao";
import EventImg from "../../assets/calendar.png";
import Cabecalho from "../../components/Cabecalho";
import ModalAlerta from "../../components/ModalAlerta";
import ModalNovaReserva from "../../components/ModalNovaReserva";

import { styles } from "./styles";
import BotaoAdicionar from "../../components/BotaoAdicionar";
import CardSuasReservas from "../../components/CardSuasReservas";

const YourReservers: React.FC = () => {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalAlerta, setModalAlerta] = useState(false);

  const modalDeSalvar = () => {
    setModalVisivel(false);
    setModalAlerta(true);
  };

  return (
    <View style={styles.container}>
      <Cabecalho icone="list" titulo="Suas Reservas" />

      {/* <View style={styles.content}>
        <ScrollView>
          <Image source={EventImg} style={styles.image} />
          <Text style={styles.description}>
            Vamos cadastrar sua primeira {"\n"} reserva?
          </Text>

          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => setModalVisivel(true)}
          >
            <Text style={styles.buttonAddLabel}>Adicionar</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao corLista={theme.colors.purple_300} />
        </View>
      </View> */}

      <View style={styles.contentList}>
        <ScrollView>
          <CardSuasReservas />
          <CardSuasReservas />
          <CardSuasReservas />
          <CardSuasReservas />
          <CardSuasReservas />
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao corLista={theme.colors.purple_300} />
        </View>
      </View>

      <BotaoAdicionar onPress={() => setModalVisivel(true)} />

      <ModalNovaReserva
        modalVisivel={modalVisivel}
        setModalVisivel={setModalVisivel}
        salvar={modalDeSalvar}
      />

      <ModalAlerta modalAlerta={modalAlerta} setModalAlerta={setModalAlerta} />
    </View>
  );
};

export default YourReservers;
