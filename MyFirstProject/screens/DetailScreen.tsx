import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;