import React, { Dispatch, SetStateAction } from "react";
import { Image, Text, View } from "react-native";
import Modals from "../Modals";

import successImg from "../../assets/success.png";
import errorImg from "../../assets/error.png";
import warningImg from "../../assets/warning.png";

import { styles } from "./styles";

interface IProps {
  modalAlert: boolean;
  setModalAlert: Dispatch<SetStateAction<boolean>>;
}

const ModalAlert: React.FC<IProps> = ({ modalAlert, setModalAlert }) => {
  return (
    <Modals modalVisible={modalAlert} setModalVisible={setModalAlert}>
      <View style={styles.container}>
        <Image source={successImg} style={styles.image} />
        <Text style={styles.description}>Cadastro salvo com sucesso!</Text>
      </View>
    </Modals>
  );
};

export default ModalAlert;
