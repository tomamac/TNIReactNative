import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#1724FA" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "หน้าหลัก" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          options={{
          //   title: "เกี่ยวกับเรา",
          //   headerStyle: { backgroundColor: "#1724FA" },
          //   headerTintColor: "white",
          //   headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        />
        <HomeStack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{ title: "โพสต์" }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
