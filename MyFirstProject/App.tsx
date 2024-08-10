import { View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import FlatListExample from "./components/FlatListExample";
import FlatListCallBackend from "./components/FlatListCallBackend";

const App2 = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <UseEffectExample/> */}
      {/* <FlatListExample /> */}
      <FlatListCallBackend/>
    </View>
  );
};

export default App2;
