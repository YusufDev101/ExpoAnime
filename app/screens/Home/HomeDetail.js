import React from "react";
import { Button, StyleSheet } from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

const HomeDetail = ({ navigation }) => {
  return (
    <AppScreen style={styles.container}>
      <AppText>HomeDetail screen</AppText>
      
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

export default HomeDetail;
