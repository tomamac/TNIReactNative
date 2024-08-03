import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/800x800.png");
  const profileImage2 = require("../assets/ProfPic.png");

  const myName = "Warach Weeraphan";
  const notMyName = "Not Warach";
  const [name, setName] = useState("Warach Weeraphan");
  const [image, setImage] = useState(profileImage);

  const handleChangeName = () => {
    setName(name == myName ? notMyName : myName);
  };

  const handleChangeImage = () => {
    setImage(image == profileImage ? profileImage2 : profileImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={image} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="change name" onPress={handleChangeName} />
          <Text />
          <Button title="change image" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
