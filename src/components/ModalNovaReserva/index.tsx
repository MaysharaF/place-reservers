import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Modals from "../Modals";

import { styles } from "./styles";

interface IProps {
  modalVisivel: boolean;
  setModalVisivel: Dispatch<SetStateAction<boolean>>;
  salvar: () => void;
}

const ModalNovaReserva: React.FC<IProps> = ({
  modalVisivel,
  setModalVisivel,
  salvar,
}) => {
  const [ambiente, setAmbiente] = useState<string>("");

  const ambientes = [
    { label: "Salão de Jogos", value: "salão de jogos" },
    { label: "Espaço Pet", value: "espaço pet" },
    { label: "Quadra de Esportes", value: "quadra de esportes" },
  ];

  return (
    <Modals setModalVisivel={setModalVisivel} modalVisivel={modalVisivel}>
      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Data da Reserva</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              keyboardType="default"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Data da Entrega</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              keyboardType="default"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Ambiente</Text>
            <RNPickerSelect
              value={ambiente}
              onValueChange={(ambiente) => setAmbiente(ambiente)}
              placeholder={{
                label: "Escolha um ambiente",
                value: null,
              }}
              items={ambientes}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Qtd. Pessoas</Text>
            <TextInput
              style={styles.input}
              placeholder="Nº Pessoas"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={styles.saveContet}>
        <TouchableOpacity style={styles.buttonSave} onPress={() => salvar()}>
          <Text style={styles.titleSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </Modals>
  );
};

export default ModalNovaReserva;
