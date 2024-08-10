import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  };

  const handleSubumit = () => {
    let errorMessage = "";
    if (!name) {
      /*  Alert.alert("Alert","Please Enter Name", [{text: "OK"}]);
        return; //break;*/
      errorMessage += "Please Enter Name\n";
    }
    if (!email) {
      /*  Alert.alert("Alert","Please Enter Email", [{text: "OK"}]);
          return; //break;*/
      errorMessage += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      errorMessage += "Invalid Email Format\n";
    }
    if (!password) {
      /*  Alert.alert("Alert","Please Enter Password", [{text: "OK"}]);
          return; //break;*/
      errorMessage += "Please Enter Password\n";
    } else if (password.length < 6) {
      errorMessage += "Password must be at lease 6 characters\n";
    }
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="SUBMIT" onPress={handleSubumit} />
    </View>
  );
};

export default Login;
