import React, { useState } from "react";
import { View, Image, Text, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../config/firebase";

import AuthImg from "../../assets/auth.png";
import ButtonAuth from "../../components/ButtonAuth";
import InputAuth from "../../components/InputAuth";

import { styles } from "./styles";

const Signup: React.FC = () => {
  const [errorSignup, setErrorSignup] = useState<boolean>(false);
  const [formSignup, setFormSignup] = useState({
    name: "",
    numberapt: "",
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleState = (name: string, value: string) => {
    setFormSignup((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(formSignup.email, formSignup.password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Dashboard", { idUser: user?.uid });
      })
      .catch((error) => {
        setErrorSignup(true);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
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
              handleState={handleState}
              prop="name"
            />
            <InputAuth
              title="Número de apartamento"
              placeholder="Digite o número do seu apartamento"
              inputType="default"
              handleState={handleState}
              prop="numberapt"
            />
            <InputAuth
              title="E-mail"
              placeholder="Digite seu e-mail"
              inputType="default"
              handleState={handleState}
              prop="email"
            />
            <InputAuth
              title="Senha"
              placeholder="Digite sua senha"
              inputType="default"
              handleState={handleState}
              prop="password"
            />
          </View>

          <View style={styles.footer}>
            <ButtonAuth title="Cadastre-se" onPress={register} />

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
    </KeyboardAvoidingView>
  );
};

export default Signup;
