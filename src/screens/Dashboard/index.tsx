import React from "react";
import { View, ScrollView } from "react-native";
import ButtonAdd from "../../components/ButtonAdd";
import CardArea from "../../components/CardArea";
import Header from "../../components/Header";

import { styles } from "./styles";

const Dashboard: React.FC = () => {
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

      <ButtonAdd onPress={() => console.log("1")} />
    </View>
  );
};

export default Dashboard;
