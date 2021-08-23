import React, { createRef } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface IProps {
  corDash?: any;
  corEvento?: any;
  corLista?: any;
}

const BotaoNavegacao: React.FC<IProps> = ({ corDash, corEvento, corLista }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container} ref={createRef()}>
      <View style={styles.content}>
        <View style={styles.icons}>
          <Icon
            name="dashboard"
            size={35}
            color={corDash || theme.colors.gray_200}
            onPress={() => navigation.navigate("Dashboard")}
          />
          <Icon
            name="event"
            size={35}
            color={corEvento || theme.colors.gray_200}
            onPress={() => navigation.navigate("Reservas")}
          />
          <Icon
            name="list"
            size={35}
            color={corLista || theme.colors.gray_200}
            onPress={() => navigation.navigate("SuasReservas")}
          />
        </View>
      </View>
    </View>
  );
};

export default BotaoNavegacao;
