import React from "react";
import { Text } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type IProps = RectButtonProps & {
  titulo: string;
};

const ButtonAuth: React.FC<IProps> = ({ titulo, ...rest }) => {
  return (
    <RectButton style={styles.button} {...rest}>
      <Text style={styles.title}>{titulo}</Text>
    </RectButton>
  );
};

export default ButtonAuth;
