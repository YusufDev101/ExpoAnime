import React from "react";

// Icons.
import { Ionicons } from "@expo/vector-icons";

// Navigation.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens.
import Home from "../../screens/home";
import Search from "../../screens/search";
import Details from "../../screens/details";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="homeScreen" component={Home} />
      <Stack.Screen name="detailsScreen" component={Details} />
      <Stack.Screen name="searchScreen" component={Search} />
    </Stack.Navigator>
  );
};

const Mappings = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          backgroundColor: "darkgray",
          position: "absolute",
          marginLeft: 10,
          marginRight: 10,
          borderTopWidth: 0,
          bottom: 10,
          borderRadius: 20,
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
        labelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search-circle-outline";
          } else if (route.name === "Goals") {
            iconName = focused ? "barbell" : "barbell-outline";
          } else if (route.name === "History") {
            iconName = focused ? "archive" : "archive-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={20}
              color={color}
              style={{ paddingTop: 15 }}
            />
          );
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Mappings;
