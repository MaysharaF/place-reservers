import React, { Dispatch, SetStateAction } from "react";
import { Modal, View } from "react-native";
import { Icon } from "react-native-elements";

import { styles } from "./styles";

interface IProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const Modals: React.FC<IProps> = ({
  modalVisible,
  setModalVisible,
  children,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default Modals;
