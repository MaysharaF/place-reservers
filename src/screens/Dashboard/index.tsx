import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import BotaoNavegacao from "../../components/BotaoNavegacao";
import BotaoAdicionar from "../../components/BotaoAdicionar";
import CardArea from "../../components/CardArea";
import Header from "../../components/Header";
import ModalAddNovaArea from "../../components/ModalAddNovaArea";
import ModalAlerta from "../../components/ModalAlerta";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Dashboard: React.FC = () => {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalAlerta, setModalAlerta] = useState(false);

  const modalDeSalvar = () => {
    setModalAlerta(true);
    setModalVisivel(false);
  };

  return (
    <View style={styles.container}>
      <Header icone="dashboard" titulo="Dashboard" />

      <View style={styles.content}>
        <ScrollView>
          <CardArea
            titulo="Salão de jogos"
            descricao="Aberto todos os dias"
            quantidade={10}
          />
          <CardArea
            titulo="Salão de jogos"
            descricao="Aberto todos os dias"
            quantidade={10}
          />
          <CardArea
            titulo="Salão de jogos"
            descricao="Aberto todos os dias"
            quantidade={10}
          />
          <CardArea
            titulo="Salão de jogos"
            descricao="Aberto todos os dias"
            quantidade={10}
          />
          <CardArea
            titulo="Salão de jogos"
            descricao="Aberto todos os dias"
            quantidade={10}
          />
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao corDash={theme.colors.purple_300} />
        </View>
      </View>

      <BotaoAdicionar onPress={() => setModalVisivel(true)} />

      <ModalAddNovaArea
        modalVisivel={modalVisivel}
        setModalVisivel={setModalVisivel}
        salvar={modalDeSalvar}
      />

      <ModalAlerta modalAlerta={modalAlerta} setModalAlerta={setModalAlerta} />
    </View>
  );
};

export default Dashboard;
