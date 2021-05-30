import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Config.
import colors from "../../../config/colors";

// Dashboard Components.
import Trending from "./Trending";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const TrendingStats = ({ dataObject }) => {
  const [countPoke, setCountPoke] = useState([]);
  const [state, setState] = useState({
    TrendingData: [],
  });

  useEffect(() => {
    //setCountPoke(dataObject);
  }, [dataObject]);

  return (
    <ScrollView
      style={{ top: Dimensions.get("window").height / 2.6 }}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <LinearGradient
        colors={['orange', 'yellow']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 5,
          width: 150,
          height: 50,
          alignItems: "center"
        }}
      >        
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            {"airing"}
          </Text>
          <View style={{flex: 1}}></View>
          <Ionicons name="md-search" size={24} color="black" 
          style={{
            marginRight: 10
          }} />
      </LinearGradient>

      <LinearGradient
        colors={['orange', 'yellow']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 5,
          width: 150,
          height: 50,
          alignItems: "center"
        }}
      >            
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            {"completed"}
          </Text> 
          <View style={{flex: 1}}></View>
          <Ionicons name="md-search" size={24} color="black" 
          style={{
            marginRight: 10
          }} />
      </LinearGradient>

      <LinearGradient
        colors={['orange', 'yellow']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 5,
          width: 150,
          height: 50,
          alignItems: "center"
        }}
      >         
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            {"to_be_aired"}
          </Text>
          <View style={{flex: 1}}></View>
          <Ionicons name="md-search" size={24} color="black" 
          style={{
            marginRight: 10
          }} />
      </LinearGradient>

      <LinearGradient
        colors={['orange', 'yellow']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 5,
          width: 150,
          height: 50,
          alignItems: "center"
        }}
      >        
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            {"tba"}
          </Text>
          <View style={{flex: 1}}></View>
          <Ionicons name="md-search" size={24} color="black" 
          style={{
            marginRight: 10
          }} />
      </LinearGradient>

      <LinearGradient
        colors={['orange', 'yellow']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 5,
          width: 150,
          height: 50,
          alignItems: "center"
        }}
      >         
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            {"upcoming"}
          </Text>
          <View style={{flex: 1}}></View>
          <Ionicons name="md-search" size={24} color="black" 
          style={{
            marginRight: 10
          }} />
        </LinearGradient>

  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrendingStats;
