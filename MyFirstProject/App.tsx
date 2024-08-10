import { StatusBar } from "expo-status-bar";
import { View, TextInput, Alert,  Button } from "react-native";
import React, { useState, useEffect } from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import ProfileScreen from "./components/ProfileScreen";
import { stylesLogin, stylesPractice } from "./styles/styles";
import Login from "./components/Login";

export default function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFootermessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to: ${fullname}`);
  }, [fullname]);

  const handleButtonClick = () => {
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };
  return (
    <View style={stylesPractice.container}>
      <StatusBar style="auto" />
      <ProfileScreen />
      <Login />
      {/* <AppHeader fullname={fullname} message={message} /> */}
      {/* <Content message={message} fullname={fullname} /> */}
      {/* <Content message={message} onButtonClick={handleButtonClick}/>
      <AppFooter footerMessage={footerMessage} />
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      /> */}
    </View>
  );
}
