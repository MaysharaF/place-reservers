import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import BotaoNavegacao from "../../components/BotaoNavegacao";
import BotaoAdicionar from "../../components/BotaoAdicionar";
import CardArea from "../../components/CardArea";
import Cabecalho from "../../components/Cabecalho";
import ModalAddNovaArea from "../../components/ModalAddNovaArea";
import ModalAlerta from "../../components/ModalAlerta";

import { theme } from "../../global/styles/theme";
import firebase from "../../config/firebase";

import { styles } from "./styles";

const Dashboard: React.FC = () => {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalAlerta, setModalAlerta] = useState(false);
  const [ambientes, setAmbientes] = useState<
    {
      id: string;
      descricao: string;
      lotacao_max: number;
      nome: string;
    }[]
  >([]);

  const modalDeSalvar = () => {
    setModalAlerta(true);
    setModalVisivel(false);
  };

  useEffect(() => {
    const pegandoDados = async () => {
      const data = await firebase.database().ref(`/ambientes`).get();
      if (!data) {
        setAmbientes([]);
        return;
      }

      const payload = data.val();
      const propriedades = Object.getOwnPropertyNames(payload);

      const payloadFormatado = propriedades.map((propriedade) => {
        return {
          id: propriedade,
          descricao: payload[propriedade]["descricao"],
          lotacao_max: +payload[propriedade]["lotacao_max"],
          nome: payload[propriedade]["nome"],
        };
      });

      setAmbientes(payloadFormatado);
    };

    pegandoDados();
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref(`/ambientes`)
      .on("child_added", async () => {
        const data = await firebase.database().ref(`/ambientes`).get();
        if (!data) {
          setAmbientes([]);
          return;
        }

        const payload = data.val();
        const propriedades = Object.getOwnPropertyNames(payload);

        const payloadFormatado = propriedades.map((propriedade) => {
          return {
            id: propriedade,
            descricao: payload[propriedade]["descricao"],
            lotacao_max: +payload[propriedade]["lotacao_max"],
            nome: payload[propriedade]["nome"],
          };
        });

        setAmbientes(payloadFormatado);
      });

    firebase
      .database()
      .ref(`/ambientes`)
      .on("child_removed", async () => {
        const data = await firebase.database().ref(`/ambientes`).get();

        if (!data) {
          setAmbientes([]);
          return;
        }
        const payload = data.val();
        const propriedades = Object.getOwnPropertyNames(payload);

        const payloadFormatado = propriedades.map((propriedade) => {
          return {
            id: propriedade,
            descricao: payload[propriedade]["descricao"],
            lotacao_max: +payload[propriedade]["lotacao_max"],
            nome: payload[propriedade]["nome"],
          };
        });

        setAmbientes(payloadFormatado);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Cabecalho icone="dashboard" titulo="Dashboard" />

      <View style={styles.content}>
        <ScrollView>
          {ambientes.map((ambiente) => (
            <CardArea
              id={ambiente.id}
              key={ambiente.id}
              titulo={ambiente.nome}
              descricao={ambiente.descricao}
              quantidade={ambiente.lotacao_max}
            />
          ))}
        </ScrollView>
        <View style={styles.menu}>
          <BotaoNavegacao corDash={theme.colors.purple_300} />
        </View>
      </View>

      <BotaoAdicionar onPress={() => setModalVisivel(true)} />

      <ModalAddNovaArea
        modalVisivel={modalVisivel}
        setModalVisivel={setModalVisivel}
        salvar={modalDeSalvar}
      />

      <ModalAlerta modalAlerta={modalAlerta} setModalAlerta={setModalAlerta} />
    </View>
  );
};

export default Dashboard;
