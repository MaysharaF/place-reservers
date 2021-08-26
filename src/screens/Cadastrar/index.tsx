import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../config/firebase";

import AuthImg from "../../assets/auth.png";
import ButtonAuth from "../../components/ButtonAuth";
import InputAuth from "../../components/InputAuth";

import { styles } from "./styles";

const Cadastrar: React.FC = () => {
  const [erroCadastro, setErroCadastro] = useState<boolean>(false);
  const [formCadastro, setFormCadastro] = useState({
    nome: "",
    num_apt: "",
    email: "",
    senha: "",
  });
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("Login");
  };

  const lidandoComEstado = (nome: string, valor: string) => {
    setFormCadastro((oldValue) => ({
      ...oldValue,
      [nome]: valor,
    }));
  };

  const registrar = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(formCadastro.email, formCadastro.senha)
      .then((userCredential) => {
        let usuario = userCredential.user;
        navigation.navigate("Dashboard", { idUser: usuario?.uid });
      })
      .catch((error) => {
        setErroCadastro(true);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
              titulo="Nome completo"
              placeholder="Digite seu nome completo"
              inputType="default"
              lidandoComEstado={lidandoComEstado}
              prop="nome"
            />
            <InputAuth
              titulo="Número de apartamento"
              placeholder="Digite o número do seu apartamento"
              inputType="default"
              lidandoComEstado={lidandoComEstado}
              prop="num_apt"
            />
            <InputAuth
              titulo="E-mail"
              placeholder="Digite seu e-mail"
              inputType="default"
              lidandoComEstado={lidandoComEstado}
              prop="email"
            />
            <InputAuth
              titulo="Senha"
              placeholder="Digite sua senha"
              inputType="default"
              lidandoComEstado={lidandoComEstado}
              prop="senha"
            />
          </View>

          <View style={styles.footer}>
            <ButtonAuth titulo="Cadastre-se" onPress={registrar} />

            <Text>
              Já sou um membro.
              <Text style={styles.span} onPress={login}>
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

export default Cadastrar;
