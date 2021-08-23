import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Authentication from "../screens/Authentication";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import Reservers from "../screens/Reservers";
import YourReservers from "../screens/YourReservers";

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
      <Screen name="Signup" component={Signup} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Reservers" component={Reservers} />
      <Screen name="YourReservers" component={YourReservers} />
    </Navigator>
  );
};

export default AuthRoutes;
