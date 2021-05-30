import React from "react";
import { Dimensions, View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components.
import AppText from "../../../components/AppText";

// Config.
import colors from "../../../config/colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const Trending = ({ image, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 10,
        elevation: 10,
        borderRadius: 20,
      }}
    >
      {/* <Image
        style={{
          width: 120,
          height: 70,
          overflow: "hidden",
          borderRadius: 20,
        }}
        source={SetImage(image)}
      ></Image> */}
      <Text style={{ fontSize: 14 }} maxLength={10}>
        {title == null ? "Loading ..." : title}
      </Text>
    </View>
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
    backgroundColor: colors.white,
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

export default Trending;
