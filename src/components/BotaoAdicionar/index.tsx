import React from "react";
import { Icon } from "react-native-elements";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type IProps = RectButtonProps & {};

const BotaoAdicionar: React.FC<IProps> = ({ ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Icon name="add" size={50} color="#fff" />
    </RectButton>
  );
};

export default BotaoAdicionar;
