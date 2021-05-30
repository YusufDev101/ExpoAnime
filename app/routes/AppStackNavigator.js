import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Screens.
import StackNavigator from "../screens/Home/index";
import Detail from '../screens/About/Detail'

import AboutTabNavigator from "../screens/About/";

// Components.
import AppText from "../components/AppText";

// Create stack hook.
const Stack = createStackNavigator();

const windowWidth = Dimensions.get("window").width;
const iconSize = 24;

// Header to be used on stack.
const HeaderTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headerTitle} numberOfLines={1}>
        {title}
      </AppText>
    </View>
  );
};

// Header logo with icon.
const HeaderLogo = () => {
  const navigation = useNavigation();
  return (
    <MaterialCommunityIcons
      name="menu"
      size={iconSize}
      style={styles.icon}
      onPress={() => navigation.openDrawer()}
    />
  );
};

// Create home stack.
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerTitle: () => <HeaderTitle title="Home Screen" />,
          headerLeft: () => <HeaderLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

// Create about stack.
const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="AboutProfile"
        component={AboutTabNavigator}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Styles.
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: "100%",
  },
  headerTitle: {
    color: "black",
    fontSize: 24,
    letterSpacing: 1,
    overflow: "hidden",
    width: windowWidth - iconSize * 2 - 20,
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
  },
});

export { HomeStack, AboutStack };
