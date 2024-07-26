import { View, Text } from "react-native";
import React from "react";
import Styles from "./Styles";

type AppHeaderProps = {
  title: string;
  subtitle: string;
};

const AppHeader = ({ title, subtitle }: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.headerText}>{title}</Text>
      <Text style={Styles.subtitleText}>{subtitle}</Text>
    </View>
  );
};

export default AppHeader;
