import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";
import { ListItem, Avatar } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const [detail, setDetail] = React.useState<any>([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  const getProductbyId = async () => {
    try {
      const response = await findProductbyId(route.params.id);
      //console.log(response.data.data);
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getProductbyId();
    }, [])
  );
  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem.Content>
          <ListItem.Title>{item.ch_title}</ListItem.Title>
        </ListItem.Content>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item: any) => item.ch_id.toString()}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default DetailScreen;
