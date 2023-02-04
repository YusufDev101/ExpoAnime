import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import { Ionicons } from "@expo/vector-icons";

// API
import api from "../../utils/api";

const Home = ({ navigation }) => {
  const [jsonData, setJsonData] = useState([]);
  const [animeSchedule, setAnimeSchedule] = useState([]);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    GetAnime();
    GetAnimeSchedule();
  }, []);

  const GoToForm = (item) => {
    try {
      navigation.navigate("detailsScreen", {
        data: item,
      });
    } catch (error) {}
  };

  const GetAnime = async () => {
    try {
      let dataval = await api.GetLatestAnime();

      setJsonData(dataval.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const GetAnimeSchedule = async () => {
    try {
      let dataval = await api.GetScheduleAnime();

      setAnimeSchedule(dataval.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <SafeAreaView style={{ display: "flex" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: "red",
          }}
        ></View>
        <Text style={{ marginTop: 5, marginLeft: 10 }}>Hello, Username</Text>
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: "red",
          }}
        ></View>
      </View>

      <Image
        style={{
          position: "absolute",
          right: 10,
          width: windowWidth / 2.1,
          height: windowHeight / 3.3,
          zIndex: 20,
          resizeMode: "stretch",
          marginTop: 40,
        }}
        source={require("../../assets/Sword-Art-Anime-PNG-Images.png")}
      />

      <View
        style={{
          height: windowHeight / 4.8,
          width: "90%",
          elevation: 8,
          shadowColor: "black",
          marginLeft: 20,
          marginTop: 40,
          marginBottom: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "white", // added a background color
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 20,
                fontSize: 22,
              }}
            >
              Anime Application
            </Text>
            <Text
              style={{
                marginTop: -1,
                marginLeft: 20,
                fontSize: 12,
                color: "gray",
              }}
            >
              Version 1.0.0.0
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
            marginTop: 7,
          }}
        >
          Latest
        </Text>
        <View style={{ flex: 1 }}></View>
        <Ionicons
          name="md-chevron-forward"
          size={30}
          color="black"
          style={{
            marginRight: 20,
            fontSize: 16,
            marginTop: 7,
          }}
        />
      </View>
      <FlatList
        data={jsonData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ marginLeft: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => GoToForm(item)}>
            <Image
              source={{ uri: item.images.jpg.large_image_url }}
              resizeMode="stretch"
              style={{
                backgroundColor: "#f9c2ff",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 10,
                height: windowHeight / 4.4,
                width: windowWidth / 2.9,
                borderRadius: 10,
                elevation: 5,
                overflow: "hidden",
              }}
            ></Image>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              maxLength={8}
              style={{ fontSize: 10, marginLeft: 10, marginBottom: 10 }}
            >
              {item.title != null
                ? item.title.length > 20
                  ? item.title.substring(0, 20) + "..."
                  : item.title
                : item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.mal_id}
      />

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
            marginTop: 20,
          }}
        >
          Today's Releases
        </Text>
        <View style={{ flex: 1 }}></View>
        <Ionicons
          name="md-chevron-forward"
          size={30}
          color="black"
          style={{
            marginRight: 20,
            fontSize: 16,
            marginTop: 7,
          }}
        />
      </View>
      <FlatList
        data={animeSchedule}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ marginLeft: 10 }}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.images.jpg.large_image_url }}
              resizeMode="stretch"
              style={{
                backgroundColor: "#f9c2ff",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 10,
                height: windowHeight / 5.5,
                width: windowWidth / 1.7,
                borderRadius: 10,
                elevation: 5,
                overflow: "hidden",
              }}
            ></Image>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              maxLength={8}
              style={{ fontSize: 10, marginLeft: 10, marginBottom: 10 }}
            >
              {item.title != null
                ? item.title.length > 20
                  ? item.title.substring(0, 20) + "..."
                  : item.title
                : item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.mal_id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
});

export default Home;
