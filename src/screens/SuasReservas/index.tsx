import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";

import { theme } from "../../global/styles/theme";
import firebase from "../../config/firebase";

import BotaoNavegacao from "../../components/BotaoNavegacao";
import EventImg from "../../assets/calendar.png";
import Cabecalho from "../../components/Cabecalho";
import ModalAlerta from "../../components/ModalAlerta";
import ModalNovaReserva from "../../components/ModalNovaReserva";

import { styles } from "./styles";
import BotaoAdicionar from "../../components/BotaoAdicionar";
import CardSuasReservas from "../../components/CardSuasReservas";

const YourReservers: React.FC = () => {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalAlerta, setModalAlerta] = useState(false);
  const [reservas, setReservas] = useState<
    {
      id: string;
      ambiente: string;
      data_reserva: string;
      data_entrega: string;
      qtd_pessoa: number;
    }[]
  >([]);

  const modalDeSalvar = () => {
    setModalVisivel(false);
    setModalAlerta(true);
  };

  const { currentUser } = firebase.auth();

  useEffect(() => {
    const pegandoDados = async () => {
      const data = await firebase
        .database()
        .ref(`/morador/${currentUser?.uid}/reservas`)
        .get();
      if (!data) {
        setReservas([]);
        return;
      }

      const payload = data.val();
      const propriedades = Object.getOwnPropertyNames(payload);

      const payloadFormatado = propriedades.map((propriedade) => {
        return {
          id: propriedade,
          ambiente: payload[propriedade]["ambiente"],
          data_reserva: payload[propriedade]["data_reserva"],
          data_entrega: payload[propriedade]["data_entrega"],
          qtd_pessoa: +payload[propriedade]["qtd_pessoa"],
        };
      });

      setReservas(payloadFormatado);
    };

    pegandoDados();
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref(`/morador/${currentUser?.uid}/reservas`)
      .on("child_added", async () => {
        const data = await firebase
          .database()
          .ref(`/morador/${currentUser?.uid}/reservas`)
          .get();
        if (!data) {
          setReservas([]);
          return;
        }

        const payload = data.val();
        const propriedades = Object.getOwnPropertyNames(payload);

        const payloadFormatado = propriedades.map((propriedade) => {
          return {
            id: propriedade,
            ambiente: payload[propriedade]["ambiente"],
            data_reserva: payload[propriedade]["data_reserva"],
            data_entrega: payload[propriedade]["data_entrega"],
            qtd_pessoa: +payload[propriedade]["qtd_pessoa"],
          };
        });

        setReservas(payloadFormatado);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Cabecalho icone="list" titulo="Suas Reservas" />

      {reservas.length ? (
        <>
          <View style={styles.contentList}>
            <ScrollView>
              {reservas.map((reserva) => (
                <CardSuasReservas
                  key={reserva.id}
                  data_reserva={reserva.data_reserva}
                  qtd_pessoa={reserva.qtd_pessoa}
                  nome={reserva.ambiente}
                />
              ))}
            </ScrollView>
            <View style={styles.menu}>
              <BotaoNavegacao corLista={theme.colors.purple_300} />
            </View>
          </View>
          <BotaoAdicionar onPress={() => setModalVisivel(true)} />
        </>
      ) : (
        <View style={styles.content}>
          <ScrollView>
            <Image source={EventImg} style={styles.image} />
            <Text style={styles.description}>
              Vamos cadastrar sua primeira {"\n"} reserva?
            </Text>

            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => setModalVisivel(true)}
            >
              <Text style={styles.buttonAddLabel}>Adicionar</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.menu}>
            <BotaoNavegacao corLista={theme.colors.purple_300} />
          </View>
        </View>
      )}

      <ModalNovaReserva
        modalVisivel={modalVisivel}
        setModalVisivel={setModalVisivel}
        salvar={modalDeSalvar}
      />

      <ModalAlerta modalAlerta={modalAlerta} setModalAlerta={setModalAlerta} />
    </View>
  );
};

export default YourReservers;
