import React, { useState } from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Auth.
import AuthContext from "./app/auth/authContext";

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
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
