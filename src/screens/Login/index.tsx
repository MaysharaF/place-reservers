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
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleState = (name: string, value: string) => {
    setLoginForm((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const loginFirebae = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginForm.email, loginForm.password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Dashboard", { idUser: user?.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigation.navigate("Dashboard", { idUser: user?.uid });
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
              title="E-mail"
              placeholder="Digite seu e-mail"
              inputType="default"
              handleState={handleState}
              prop="email"
            />
            <InputAuth
              title="Senha"
              secureTextEntry={true}
              placeholder="Digite sua senha"
              inputType="default"
              handleState={handleState}
              prop="password"
            />
          </View>

          <View style={styles.footer}>
            <ButtonAuth title="Entrar" onPress={loginFirebae} />

            <Text>
              Sou um novo usuário.
              <Text style={styles.span} onPress={handleSignup}>
                Cadastre-se
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {errorLogin &&
        Alert.alert(
          "Oops!",
          "Usuário não encontrado! Verifique se seu e-mail e senha estão corretos.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        )}
    </KeyboardAvoidingView>
  );
};

export default Login;
