import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Authentication from "../screens/Authentication";
import Login from "../screens/Login";

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
      <Screen name="Authentication" component={Authentication} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthRoutes;
