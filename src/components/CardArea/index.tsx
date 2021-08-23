import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import firebase from "../../config/firebase";

import { styles } from "./styles";

interface IProps {
  titulo: string;
  descricao: string;
  quantidade: number;
  id: string;
}

const CardArea: React.FC<IProps> = ({ titulo, descricao, quantidade, id }) => {
  const excluiAmbiente = (id: string) => {
    return Alert.alert(
      "Exclusão de Ambiente",
      "Deseja excluir este ambiente?",
      [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: async () => {
            try {
              await firebase.database().ref(`/ambientes/${id}`).remove();
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]
    );
  };

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
          <TouchableOpacity>
            <Icon
              name="close"
              size={20}
              color="#949090"
              onPress={() => excluiAmbiente(id)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardArea;
