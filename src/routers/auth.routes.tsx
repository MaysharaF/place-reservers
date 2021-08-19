import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Authentication from "../screens/Authentication";

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
    >
      <Screen name="Authentication" component={Authentication} />
    </Navigator>
  );
};

export default AuthRoutes;
