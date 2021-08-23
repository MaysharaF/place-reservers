import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Modals from "../Modals";

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
  return (
    <Modals setModalVisivel={setModalVisivel} modalVisivel={modalVisivel}>
      <View style={styles.form}>
        <View style={styles.inputBox}>
          <Text style={styles.title}>Nome do ambiente</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do ambiente"
            keyboardType="default"
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.title}>Lotação máxima</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a capacidade máxima de lotação"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.title}>Descrição</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Digite uma descrição ou observação"
            keyboardType="default"
          />
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

export default ModalAddNovaArea;
