import { View, Text, Button, Alert } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type ContentProps = {
  message: string;
  fullname: string;
};
const Content = ({ message, fullname }: ContentProps) => {
  const [displayFullname, setDisplayFullname] = React.useState("");

  const handleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="CLICK ME" onPress={handleButtonClick} />
    </View>
  );
};

export default Content;
