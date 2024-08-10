import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

interface NewsItem {
  url: string;
  title: string;
  publishedAt: string;
}

const NewsApp = (): React.JSX.Element => {
  //กำหนด state สำหรับเก็บข้อมูล
  const [data, setData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const APIKEY = "255b7800a28143cca884b5eb6ab66b41";
  const URL = `https://newsapi.org/v2/top-headlines?country=th&apiKey=${APIKEY}`;

  //กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ component mount
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //ฟังก์ชั่น _renderItem สำหรับใช้ใน FlatList
  const _renderItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? ( //ถ้ายังโหลดข้อมูลอยู่จะแสดง AcitivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlatList
        // <Text>hello world</Text>
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  container: {
    backgroundColor: "#666",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  date: {
    fontSize: 16,
    color: "#FFF",
  },
});
