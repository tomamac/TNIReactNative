import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListCallBackend = () => {
  //กำหนด state สำหรับเก็บข้อมูล
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  //กำนหด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //ฟังก์ชั่น _renderItem สำหรับใช้ใน FlatList
  const _renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? ( //ถ้ายังโหลดข้อมูลอยู่จะแสดง AcitivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};
export default FlatListCallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#000",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  email: {
    fontSize: 16,
    color: "#FFF",
  },
});
