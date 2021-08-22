import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import ButtonAdd from "../../components/ButtonAdd";
import CardArea from "../../components/CardArea";
import Header from "../../components/Header";
import ModalAddNewArea from "../../components/ModalAddNewArea";
import ModalAlert from "../../components/ModalAlert";

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
      <Header />

      <View style={styles.content}>
        <ScrollView>
          <CardArea
            title="Salão de jogos"
            descript="Aberto todos os dias"
            quantity={10}
          />
        </ScrollView>
      </View>

      <ButtonAdd onPress={() => setModalVisible(true)} />

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
