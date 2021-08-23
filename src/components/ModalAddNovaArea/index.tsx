import React, { useState, Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Modals from "../Modals";

import { styles } from "./styles";

interface IProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  save: () => void;
}

const ModalAddNovaArea: React.FC<IProps> = ({
  modalVisible,
  setModalVisible,
  save,
}) => {
  return (
    <Modals setModalVisible={setModalVisible} modalVisible={modalVisible}>
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
        <TouchableOpacity style={styles.buttonSave} onPress={() => save()}>
          <Text style={styles.titleSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </Modals>
  );
};

export default ModalAddNovaArea;
