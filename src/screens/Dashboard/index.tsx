import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import BotaoNavegacao from "../../components/BotaoNavegacao";
import BotaoAdicionar from "../../components/BotaoAdicionar";
import CardArea from "../../components/CardArea";
import Header from "../../components/Header";
import ModalAddNewArea from "../../components/ModalAddNewArea";
import ModalAlert from "../../components/ModalAlert";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Dashboard: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);

  const saveModal = () => {
    setModalAlert(true);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header icon="dashboard" title="Dashboard" />

      <View style={styles.content}>
        <ScrollView>
          <CardArea
            title="Salão de jogos"
            descript="Aberto todos os dias"
            quantity={10}
          />
          <CardArea
            title="Salão de jogos"
            descript="Aberto todos os dias"
            quantity={10}
          />
          <CardArea
            title="Salão de jogos"
            descript="Aberto todos os dias"
            quantity={10}
          />
          <CardArea
            title="Salão de jogos"
            descript="Aberto todos os dias"
            quantity={10}
          />
          <CardArea
            title="Salão de jogos"
            descript="Aberto todos os dias"
            quantity={10}
          />
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao colorDash={theme.colors.purple_300} />
        </View>
      </View>

      <BotaoAdicionar onPress={() => setModalVisible(true)} />

      <ModalAddNewArea
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        save={saveModal}
      />

      <ModalAlert modalAlert={modalAlert} setModalAlert={setModalAlert} />
    </View>
  );
};

export default Dashboard;
