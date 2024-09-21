import { View, Text } from "react-native";
import React, { useState } from "react";

//navigations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

//screens
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";

//misc
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //headerStyle: { backgroundColor: "#1724FA" },
        //headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        // headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          //   title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#1724FA" },
          headerTintColor: "white",
          //   headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
        // headerShown: false,
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
        // headerShown: false,
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  const [isLogin] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HeaderButtonsProvider stackType="native">
          {isLogin ? (
            <Drawer.Navigator
              screenOptions={{ headerShown: false }}
              drawerContent={(props) => <MenuScreen {...props} />}
            >
              <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
              <Drawer.Screen
                name="ProductStack"
                component={ProductStackScreen}
              />
              <Drawer.Screen name="LoginStack" component={LoginStackScreen} />
            </Drawer.Navigator>
          ) : (
            <LoginStackScreen />
          )}
        </HeaderButtonsProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
