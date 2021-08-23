import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Autenticacao from "../screens/Autenticacao";
import Login from "../screens/Login";
import Cadastrar from "../screens/Cadastrar";
import Dashboard from "../screens/Dashboard";
import Reservas from "../screens/Reservas";
import SuasReservas from "../screens/SuasReservas";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
      }}
      initialRouteName="Authentication"
    >
      <Screen name="Autenticacao" component={Autenticacao} />
      <Screen name="Login" component={Login} />
      <Screen name="Cadastrar" component={Cadastrar} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Reservas" component={Reservas} />
      <Screen name="SuasReservas" component={SuasReservas} />
    </Navigator>
  );
};

export default AuthRoutes;
