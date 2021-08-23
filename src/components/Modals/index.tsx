import React, { Dispatch, SetStateAction } from "react";
import { Modal, View } from "react-native";
import { Icon } from "react-native-elements";

import { styles } from "./styles";

interface IProps {
  modalVisivel: boolean;
  setModalVisivel: Dispatch<SetStateAction<boolean>>;
}

const Modals: React.FC<IProps> = ({
  modalVisivel,
  setModalVisivel,
  children,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisivel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default Modals;
