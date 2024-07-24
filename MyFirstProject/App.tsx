import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App(): React.JSX.Element {
  const onClickMe = () => {
    Alert.alert("Hi", "Hello React.JS");
  };

  const users = [
    { id: 1001, name: "Gee" },
    { id: 1002, name: "Gem" },
  ];
  return (
    <View style={styles.container}>
      <AppHeader title="This is Header" year={2018} />
      <AppHeader title="This is Header2" />
      <Text>Hello React Native!</Text>
      {users.map((data, index) => {
        return (
          <Text key={data.id}>
            No. {index + 1} ID: {data.id} Name: {data.name}
          </Text>
        );
      })}

      <Button
        title="Click Me"
        onPress={onClickMe}
        color="pink"
        /* // onPress={()=>{
      Alert.alert('Hi','React Native is FUn!!')}
      } */
      />
      <StatusBar style="auto" />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
