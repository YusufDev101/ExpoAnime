import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";

const ListItem = ({
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
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={{ uri: image }} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <View style={styles.chevronIcon}>
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
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
  chevronIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    alignSelf: "center",
    flexDirection: "row",
    elevation: 0.5,
    borderWidth: 0.1,
    borderColor: "#ccc",
    marginVertical: 10,
    marginHorizontal: 10,
    //borderRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    fontSize: 14,
    color: colors.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ListItem;

// import { LinearGradient } from "expo-linear-gradient";
// import { Animated } from "react-native";

// <AnimatedLinearGradient
// 	 colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
// 	 style={{ your styles go here }}/>

// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
