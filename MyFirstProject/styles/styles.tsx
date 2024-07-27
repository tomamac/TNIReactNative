import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#666", //Configuring background color
  },

  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#000",
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 30,
  },

  //change name size, color, font weight
  profileName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F00",
  },
});

export default styles;
