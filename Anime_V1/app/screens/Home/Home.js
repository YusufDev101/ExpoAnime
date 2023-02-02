import React from "react";
import { Button, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

const Home = ({ navigation }) => {
  return (
    <AppScreen style={styles.container}>
      <AppText>Home screen</AppText>
      <Button title="Go to " onPress={() => navigation.navigate("Dashboard")} />
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

export default Home;
