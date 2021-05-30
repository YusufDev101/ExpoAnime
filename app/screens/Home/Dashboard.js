import React from "react";
import { Button, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

const Dashboard = ({ navigation }) => {
  return (
    <AppScreen style={styles.container}>
      <AppText>Dashboard screen</AppText>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Dashboard;
