import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Dimensions } from "react-native";

import About from "./About";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function AboutTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        backBehavior: "none",
        animationEnabled: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#282ac4",
          position: "absolute",
          width: Dimensions.get("window").width,
          height: 50,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Search") {
            iconName = "ios-search";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={About}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
