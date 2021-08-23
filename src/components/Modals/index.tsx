import React, { Dispatch, SetStateAction } from "react";
import { Modal, View, ScrollView } from "react-native";

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
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisivel}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Modals;
