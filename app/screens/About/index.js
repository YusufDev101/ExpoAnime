import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons   } from "@expo/vector-icons";

import { Dimensions } from "react-native";

import About from "./About";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function AboutTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Search") {
            iconName = "ios-search";
          }

          // You can return any component that you like here!
          return (
            <Ionicons  name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#004080",
        inactiveTintColor: "#80bfff",
        keyboardHidesTabBar: true,
        style: {
          borderRadius: 30,
          backgroundColor: "#1a8cff",         
          width: Dimensions.get("window").width - 30,
          height: 50,
          marginBottom: 10,
          alignSelf: 'center',
          alignContent: "center"
          //position: "absolute", 
        },
      }}
    >
      <Tab.Screen name="Home" 
                  component={About}  
                  options={{
                        headerShown: false,
          }} />
          
      <Tab.Screen name="Search" component={Profile}  options={{
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}
