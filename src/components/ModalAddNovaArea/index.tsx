import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import Modals from "../Modals";
import firebase from "../../config/firebase";

import { styles } from "./styles";

interface IProps {
  modalVisivel: boolean;
  setModalVisivel: Dispatch<SetStateAction<boolean>>;
  salvar: () => void;
}

const ModalAddNovaArea: React.FC<IProps> = ({
  modalVisivel,
  setModalVisivel,
  salvar,
}) => {
  const [ambienteForm, setAmbienteForm] = useState({
    nome: "",
    lotacao_max: "",
    descricao: "",
  });

  const lidandoComEstado = (nome: string, valor: string) => {
    setAmbienteForm((oldValue) => ({
      ...oldValue,
      [nome]: valor,
    }));
  };

  const savandoAmbiente = async () => {
    if (
      ambienteForm.nome === "" ||
      ambienteForm.lotacao_max === "" ||
      ambienteForm.descricao === ""
    ) {
      Alert.alert("Oops!", "Preencha os campos corretamente", [{ text: "OK" }]);
    } else {
      await firebase.database().ref(`/ambientes`).push(ambienteForm);
      setModalVisivel(false);
      Alert.alert("", "Ambiente cadastrado com sucesso", [{ text: "OK" }]);
      return (
        (ambienteForm.nome = ""),
        (ambienteForm.lotacao_max = ""),
        (ambienteForm.descricao = "")
      );
    }
  };

  return (
    <Modals setModalVisivel={setModalVisivel} modalVisivel={modalVisivel}>
      <View style={styles.form}>
        <View style={styles.inputBox}>
          <Text style={styles.title}>Nome do ambiente</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do ambiente"
            keyboardType="default"
            value={ambienteForm.nome}
            onChangeText={(value) => lidandoComEstado("nome", value)}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.title}>Lotação máxima</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a capacidade máxima de lotação"
            keyboardType="numeric"
            value={ambienteForm.lotacao_max}
            onChangeText={(value) => lidandoComEstado("lotacao_max", value)}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.title}>Descrição</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Digite uma descrição ou observação"
            keyboardType="default"
            value={ambienteForm.descricao}
            onChangeText={(value) => lidandoComEstado("descricao", value)}
          />
        </View>
      </View>

      <View style={styles.saveContet}>
        <TouchableOpacity style={styles.buttonSave} onPress={savandoAmbiente}>
          <Text style={styles.titleSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </Modals>
  );
};

export default ModalAddNovaArea;
