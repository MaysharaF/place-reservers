import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../config/firebase";

import AuthImg from "../../assets/auth.png";
import ButtonAuth from "../../components/ButtonAuth";
import InputAuth from "../../components/InputAuth";

import { styles } from "./styles";

const Login: React.FC = () => {
  const [erroLogin, setErroLogin] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState({ email: "", senha: "" });

  const lidandoComEstado = (nome: string, valor: string) => {
    setLoginForm((oldValue) => ({
      ...oldValue,
      [nome]: valor,
    }));
  };

  const navigation = useNavigation();

  const cadastrar = () => {
    navigation.navigate("Cadastrar");
  };

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginForm.email, loginForm.senha)
      .then((userCredential) => {
        let usuario = userCredential.user;
        navigation.navigate("Dashboard", { idUser: usuario?.uid });
      })
      .catch((error) => {
        setErroLogin(true);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (usuario) {
      if (usuario) {
        navigation.navigate("Dashboard", { idUser: usuario?.uid });
      }
    });
  }, []);

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
            <Text style={styles.title}>Entrar</Text>
          </View>
          <View style={styles.form}>
            <InputAuth
              titulo="E-mail"
              placeholder="Digite seu e-mail"
              inputType="default"
              lidandoComEstado={lidandoComEstado}
              prop="email"
            />
            <InputAuth
              titulo="Senha"
              secureTextEntry={true}
              placeholder="Digite sua senha"
              inputType="default"
              lidandoComEstado={lidandoComEstado}
              prop="senha"
            />
          </View>

          <View style={styles.footer}>
            <ButtonAuth titulo="Entrar" onPress={loginFirebase} />

            <Text>
              Sou um novo usuário.
              <Text style={styles.span} onPress={cadastrar}>
                Cadastre-se
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {erroLogin &&
        Alert.alert(
          "Oops!",
          "Usuário não encontrado! Verifique se seu e-mail e senha estão corretos.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        )}
    </KeyboardAvoidingView>
  );
};

export default Login;
