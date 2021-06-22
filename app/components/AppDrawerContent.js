import React, { useContext } from "react";
import { Dimensions, View, StyleSheet, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const AppDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ elevation: 10 }}>
              <Image
                style={styles.image}
                source={require("../assets/preview.png")}
              />
              <View
                style={{
                  marginLeft: 15,
                  marginRightt: 15,
                  flexDirection: "column",
                }}
              ></View>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="location-exit"
              color={color}
              size={size}
            />
          )}
          label="Version"
          onPress={() => {
            //ButtonSignOut_Click();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginLeft: 5,
    marginRight: 5,
    height: 70,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 2,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: Dimensions.get("window").height / 4,
  },
  bottomDrawerSection: {
    borderTopColor: "#f4f4f4",
    backgroundColor: "#f2f1f0",
    margin: 10,
    elevation: 10,
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 3,
  },
});

export default AppDrawerContent;
