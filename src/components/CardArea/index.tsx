import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { styles } from "./styles";

interface IProps {
  titulo: string;
  descricao: string;
  quantidade: number;
}

const CardArea: React.FC<IProps> = ({ titulo, descricao, quantidade }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.description}>{descricao}</Text>
      </View>

      <View style={styles.actionContent}>
        <Text style={styles.quantity}>Max: {quantidade}</Text>
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
