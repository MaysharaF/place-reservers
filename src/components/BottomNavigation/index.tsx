import React, { createRef } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface IProps {
  colorDash?: any;
  colorEvent?: any;
  colorList?: any;
}

const BottomNavigation: React.FC<IProps> = ({
  colorDash,
  colorEvent,
  colorList,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container} ref={createRef()}>
      <View style={styles.content}>
        <View style={styles.icons}>
          <Icon
            name="dashboard"
            size={35}
            color={colorDash || theme.colors.gray_200}
            onPress={() => navigation.navigate("Dashboard")}
          />
          <Icon
            name="event"
            size={35}
            color={colorEvent || theme.colors.gray_200}
            onPress={() => navigation.navigate("Reservers")}
          />
          <Icon
            name="list"
            size={35}
            color={colorList || theme.colors.gray_200}
            onPress={() => navigation.navigate("YouReservers")}
          />
        </View>
      </View>
    </View>
  );
};

export default BottomNavigation;
