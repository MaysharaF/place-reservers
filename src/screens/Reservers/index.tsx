import React from "react";
import { View, ScrollView } from "react-native";
import BottomNavigation from "../../components/BottomNavigation";
import CardReservers from "../../components/CardReservers";
import Header from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

const Reservers: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header icon="event" title="Reservas" />

      <View style={styles.content}>
        <ScrollView>
          <CardReservers />
        </ScrollView>
        <View style={styles.menu}>
          <BottomNavigation colorEvent={theme.colors.purple_300} />
        </View>
      </View>
    </View>
  );
};

export default Reservers;
