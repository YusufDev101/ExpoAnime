import React from "react";
import { Avatar } from "react-native-elements";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";

const ListItemDasboard = ({
  filterType,
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress} // () => filterType !== 'M' && onPress()
        style={[style]}
      >
        <View style={[styles.container]}>
          <View style={styles.postRow}>
            <View style={styles.userImage}>
              <Avatar
                rounded
                size="medium"
                source={{
                  uri: image,
                }}
              />
            </View>
            <View>
              <Text>{title}</Text>
              <Text style={styles.date}>{subTitle}</Text>
            </View>
          </View>
          {/* <Text style={styles.wordText}>{title}</Text> */}

          {image && <Image style={styles.postImage} source={{ uri: image }} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

function DisableClick(filterType) {
  // Check if the filter type is M. If M , then disable the item click.
  if (filterType !== "M") {
    return true;
  }

  // Return false to not disable the item click.
  return false;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
  },
  date: {
    color: "gray",
    fontSize: 12.5,
  },
  postRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    width: Dimensions.get("window").width * 1,
  },
  postImage: {
    backgroundColor: "rgba(0, 0, 0, 0.075)",
    height: 200,
  },
  userImage: {
    marginRight: 12,
  },
  wordRow: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  wordText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
  },
});

export default ListItemDasboard;

// import { LinearGradient } from "expo-linear-gradient";
// import { Animated } from "react-native";

// <AnimatedLinearGradient
// 	 colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
// 	 style={{ your styles go here }}/>

// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
