import React from "react";
import { View, Image, Text } from "react-native";

import HomeImg from "../../assets/home.png";
import ButtonAuth from "../../components/ButtonAuth";

import { styles } from "./styles";

const Authentication: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={HomeImg} style={styles.image} />
      </View>

      <View style={styles.infosContainer}>
        <Text style={styles.title}>Place Reserves</Text>

        <Text style={styles.subTitle}>Condomínio Alto do Paraíso</Text>

        <Text style={styles.description}>
          Aqui você consegue fazer reservas de ambientes{"\n"}no seu condomínio
          de forma fácil e rápido. Faça já{"\n"}seu acesso ou cadastre-se em
          nossa plataforma.
        </Text>
      </View>

      <View style={styles.footerAuth}>
        <ButtonAuth title="Login" />

        <View style={styles.button}>
          <Text style={styles.titleButton}>Registre-se</Text>
        </View>
      </View>
    </View>
  );
};

export default Authentication;
