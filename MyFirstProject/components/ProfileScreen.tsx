import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
//   const profileImage = require("../assets/800x800.png");
  const [name, setName] = useState("Warach Weeraphan");
  const [image, setImage] = useState(require("../assets/800x800.png"));

  const handleChangeName = () => {
    setName(name == "Warach Weeraphan" ? "Not Warach" : "Warach Weeraphan");
  };

  const handleChangeImage = () => {
    setImage(image == require("../assets/800x800.png") ? require("../assets/ProfPic.png") : require("../assets/800x800.png"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={image} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="change name" onPress={handleChangeName} />
          <Text/>
          <Button title="change image" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
