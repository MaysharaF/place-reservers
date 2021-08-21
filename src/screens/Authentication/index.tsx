import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Image, Text, TouchableOpacity } from "react-native";

import HomeImg from "../../assets/home.png";
import ButtonAuth from "../../components/ButtonAuth";

import { styles } from "./styles";

const Authentication: React.FC = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

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

        <TouchableOpacity onPress={handleSignup}>
          <View style={styles.button}>
            <Text style={styles.titleButton}>Registre-se</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;
