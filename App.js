import React, { useState } from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Navigation.
import AppNavigator from "./app/routes/AppNavigator";

const App = () => {
  const [user, setUser] = useState();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#f8f8fa",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
