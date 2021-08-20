import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthImg from "../../assets/auth.png";
import ButtonAuth from "../../components/ButtonAuth";
import InputAuth from "../../components/InputAuth";

import { styles } from "./styles";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={AuthImg} style={styles.image} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Entrar</Text>
          </View>
          <View style={styles.form}>
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
            <ButtonAuth title="Entrar" />

            <Text>
              Sou um novo usuário.
              <Text style={styles.span} onPress={handleSignup}>
                {" "}
                Cadastre-se
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
