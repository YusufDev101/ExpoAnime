import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components.
import AppText from "../../../components/AppText";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Region = ({ image, title, onPress }) => {
  //console.log('------------>', image)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 10,
        borderRadius: 20,
        elevation: 10,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          alignSelf: "flex-end",
          padding: 10,
          backgroundColor: "gray",
          width: windowWidth / 2.5,
          height: 30,
          overflow: "hidden",
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,          
         borderBottomLeftRadius: 30,
        }}
      >
        <Text
        numberOfLines={1}
        ellipsizeMode='tail'
          style={{
            fontSize: 15,
            position: "absolute",
            zIndex: 1,
            color: "white",
            shadowColor: "blue",
            alignSelf: "flex-start",
            fontWeight: "bold",
            marginLeft: 7,
            marginTop: 5
            //paddingEnd: 30,
            //paddingTop: 5,
          }}
        >
          {title == null ? "Loading ..." : title}
        </Text>
      </View>
      <Image
        resizeMode={"cover"}
        style={{
          backgroundColor: "transparent",
          width: windowWidth / 1.8,
          height: windowHeight / 3.2,
          overflow: "hidden",
          borderRadius: 30,
        }}
        source={{uri: image}}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: windowHeight / 3,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardStat: {
    borderRadius: 25,
    height: 40,
    width: 130,
    marginHorizontal: 2,
    marginVertical: 10,
  },
  cardView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default Region;
