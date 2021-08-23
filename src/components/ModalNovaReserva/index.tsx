import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Modals from "../Modals";
import firebase from "../../config/firebase";

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
  const [reservaForm, setReservaForm] = useState({
    data_reserva: "",
    data_entrada: "",
    ambiente: "",
    qtd_pessoa: "",
  });

  const lidandoComEstado = (nome: string, valor: string) => {
    setReservaForm((oldValue) => ({
      ...oldValue,
      [nome]: valor,
    }));
  };

  const { currentUser } = firebase.auth();

  const salvandoReserva = async () => {
    if (
      reservaForm.data_reserva === "" ||
      reservaForm.data_entrada === "" ||
      reservaForm.qtd_pessoa === ""
    ) {
      Alert.alert("Oops!", "Preencha os campos corretamente", [{ text: "OK" }]);
    } else {
      await firebase
        .database()
        .ref(`morador/${currentUser?.uid}/reservas`)
        .push(reservaForm);
      setModalVisivel(false);
      Alert.alert("", "Reserva cadastrado com sucesso", [{ text: "OK" }]);
      return (
        (reservaForm.data_entrada = ""),
        (reservaForm.data_reserva = ""),
        (reservaForm.qtd_pessoa = "")
      );
    }
  };

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
              value={reservaForm.data_reserva}
              onChangeText={(value) => lidandoComEstado("data_reserva", value)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Data da Entrega</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/AAAA"
              keyboardType="default"
              value={reservaForm.data_entrada}
              onChangeText={(value) => lidandoComEstado("data_entrada", value)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.title}>Ambiente</Text>
            <RNPickerSelect
              value={reservaForm.ambiente}
              onValueChange={(ambiente) =>
                lidandoComEstado("ambiente", ambiente)
              }
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
              value={reservaForm.qtd_pessoa}
              onChangeText={(value) => lidandoComEstado("qtd_pessoa", value)}
            />
          </View>
        </View>
      </View>

      <View style={styles.saveContet}>
        <TouchableOpacity style={styles.buttonSave} onPress={salvandoReserva}>
          <Text style={styles.titleSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </Modals>
  );
};

export default ModalNovaReserva;
