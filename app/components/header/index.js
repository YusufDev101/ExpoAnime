import React from "react";
import WavyHeader from "./WavyHeader";
import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HeaderActionCustom = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        // customHeight={Dimensions.get("window").height / 4}
        // customTop={Dimensions.get("window").height / 4}
        customBgColor="#219AEF"
        // customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            style={{
              left: 12,
            }}
            name="md-menu"
            size={50}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default HeaderActionCustom;
