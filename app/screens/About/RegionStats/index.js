import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Config.
import colors from "../../../config/colors";

// Dashboard Components.
import Region from "./Region";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const TrendingStats = ({ dataObject, navigation }) => {
  const [state, setState] = useState({
    AnimeData: [],
  });

  const Card_Click = (item) => {
    navigation.navigate("Detail", {
      screen: "Detail",
      initialParams: {
        AnimeObject: item,
      },
    });
  };

  useEffect(() => {
    setState({
      ...state,
      AnimeData: dataObject,
    });  
  }, [dataObject]);

  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        numColumns={200}
        data={state.AnimeData}
        keyExtractor={(item) => {
          return item.mal_id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <Region
              title={item.title.charAt(0).toUpperCase() + item.title.slice(1)}
              image={item.image_url}
              onPress={() => Card_Click(item)}
            />
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrendingStats;
