import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  return (
    <View style={{flex:1,}}>
      <StatusBar style="auto" />
      <AppHeader title="Warach Weeraphan" subtitle="Message from App.tsx" />
      <Content message="Message from App.tsx" name="Warach Weeraphan" />
      <AppFooter footerText="Thai-Nichi Institute of Techonology" />
    </View>
  );
}
