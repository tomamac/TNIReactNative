import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Styles from "./Styles";

type AppFooterProps = {
  footerText: string;
};

const AppFooter = ({ footerText }: AppFooterProps): React.JSX.Element => {
  return (
    <View style={Styles.footer}>
      <Text style={Styles.footerText}>{footerText}</Text>
    </View>
  );
};

export default AppFooter;
