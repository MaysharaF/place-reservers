import React from "react";
import { Text } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type IProps = RectButtonProps & {
  title: string;
};

const ButtonAuth: React.FC<IProps> = ({ title, ...rest }) => {
  return (
    <RectButton style={styles.button} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default ButtonAuth;
