import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthImg from "../../assets/auth.png";
import ButtonAuth from "../../components/ButtonAuth";
import InputAuth from "../../components/InputAuth";

import { styles } from "./styles";

const Signup: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={AuthImg} style={styles.image} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Registre-se</Text>
          </View>
          <View style={styles.form}>
            <InputAuth
              title="Nome completo"
              placeholder="Digite seu nome completo"
              inputType="default"
            />
            <InputAuth
              title="Número de apartamento"
              placeholder="Digite o número do seu apartamento"
              inputType="default"
            />
            <InputAuth
              title="E-mail"
              placeholder="Digite seu e-mail"
              inputType="default"
            />
            <InputAuth
              title="Senha"
              placeholder="Digite sua senha"
              inputType="default"
            />
          </View>

          <View style={styles.footer}>
            <ButtonAuth title="Cadastre-se" />

            <Text>
              Já sou um membro.
              <Text style={styles.span} onPress={handleLogin}>
                {" "}
                Entrar
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
