import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Custom.
import AppDrawerContent from "../components/AppDrawerContent";
// Screens.
import Home from "../screens/Home/Home";
import { AboutStack, HomeStack } from "./AppStackNavigator";
import StartUp from "../auth/screens/Startup";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeBackgroundColor: "orange",
        activeTintColor: "#ffffff",
      }}
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
        	let iconName;
					if (route.name === "Home") {
						iconName = "home-circle";
					} else if (route.name === "About") {
						iconName = "information-outline";
					}

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Drawer.Screen name="Home" component={AboutStack} />
    </Drawer.Navigator>
  );
};


const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Startup"
      screenOptions={{
        headerMode: "none",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Startup"
        component={StartUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />  
			</Stack.Navigator>
  );
};


export default AppNavigator;
