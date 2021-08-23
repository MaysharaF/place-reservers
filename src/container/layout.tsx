import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <View>
      <View>{children}</View>
      <View>
        <Text> menu</Text>
      </View>
    </View>
  );
};

export default Layout;
