import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return <Stack.Navigator initialRouteName="Login"></Stack.Navigator>;
};

export default AuthNavigator;
