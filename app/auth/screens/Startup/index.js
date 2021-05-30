import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground
} from "react-native";

// Api.
import AppText from "../../../components/AppText";
import AppScreen from "../../../components/AppScreen";

const StartUp = ({ navigation }) => {

  const Continue_Click = () => {
    navigation.navigate("Drawer");
  };

  useEffect(() => {
   
  }, []);

  return (
    <ImageBackground style={{ flex: 1, backgroundColor: "white" }}
    source={require('../../../assets/lfcn4bi2xan21.png')}>
      <View>
        {/* <Image
        style={styles.logo}
          resizeMode={"cover"}
          source={require('../../../assets/lfcn4bi2xan21.png')}></Image> */}

          <TouchableOpacity
          style={styles.button}
          onPress={() => Continue_Click()}
        >
          <Text style={styles.text}>{"Continue"}</Text>
        </TouchableOpacity> 
         
        <AppText style={styles.title}>v 1.0</AppText>

        </View>
     
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#219AEF",
    elevation: 10,
  },
  logo: {
    margin: 10,
    marginRight: 10,
    height: Dimensions.get("window").height / 1.2,
    width: Dimensions.get("window").width - 20,
  },
  topTitle: {
    color: "gray",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    color: "gray",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    top: Dimensions.get("window").height / 1.2
  },
  button: {
    backgroundColor: "#219AEF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    elevation: 10,
    zIndex: 2,
    marginRight: 10,
    marginLeft:20,
    top: Dimensions.get("window").height / 1.2
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default StartUp;
