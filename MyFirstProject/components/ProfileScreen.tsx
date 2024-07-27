import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/800x800.png");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.profileName}>Warach Weeraphan</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
