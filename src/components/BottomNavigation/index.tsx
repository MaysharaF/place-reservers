import React, { createRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";

import { styles } from "./styles";
import Dashboard from "../../screens/Dashboard";

const BottomNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator style={styles.container} ref={createRef()}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
