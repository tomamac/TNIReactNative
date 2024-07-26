import { View, Text, Button, Alert } from "react-native";
import React from "react";
import Styles from "./Styles";

type ContentProps = {
  message: string;
  name: string;
};
const Content = ({ message, name }: ContentProps) => {
  return (
    <View style={Styles.content}>
      <Text style={Styles.text}>{message}</Text>
      <Button
        title="CLICK ME"
        onPress={() => {
          Alert.alert("Hello", name);
        }}
      />
    </View>
  );
};

export default Content;
