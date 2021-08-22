import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { styles } from "./styles";

interface IProps {
  title: string;
  descript: string;
  quantity: number;
}

const CardArea: React.FC<IProps> = ({ title, descript, quantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{descript}</Text>
      </View>

      <View style={styles.actionContent}>
        <Text style={styles.quantity}>Max: {quantity}</Text>
        <View style={styles.actions}>
          <Icon
            name="edit"
            size={20}
            color="#949090"
            style={{ marginRight: 10 }}
          />
          <Icon name="close" size={20} color="#949090" />
        </View>
      </View>
    </View>
  );
};

export default CardArea;
