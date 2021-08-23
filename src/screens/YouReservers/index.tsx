import React from "react";
import { View, ScrollView } from "react-native";
import BottomNavigation from "../../components/BottomNavigation";
import Header from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const YouReservers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header icon="list" title="Suas Reservas" />

      <View style={styles.content}>
        <ScrollView></ScrollView>
        <View style={styles.menu}>
          <BottomNavigation colorList={theme.colors.purple_300} />
        </View>
      </View>
    </View>
  );
};

export default YouReservers;
