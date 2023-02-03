import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Linear Gradient.
import { LinearGradient } from "expo-linear-gradient";

// Icons.
import { AntDesign, Ionicons } from "@expo/vector-icons";

// API
import api from "../../utils/api";

const Details = ({ navigation, route }) => {
  const [jsonData, setJsonData] = useState();
  const [jsonDetail, setJsonDetail] = useState();
  const [jsonGenre, setJsonGenre] = useState();
  const [jsonStreaming, setJsonStreaming] = useState([]);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    setJsonData(route.params.data);
    GetAnime();
  }, []);

  const GetAnime = async () => {
    try {
      let dataval = await api.GetDetailAnime(jsonData.mal_id);
      setJsonDetail(dataval.data);
      BuildGenres(dataval.data.genres);
      BuildStreaming(dataval.data.streaming);
    } catch (error) {
      console.log("error", error);
    }
  };

  const BuildGenres = async (data) => {
    try {
      let genres = "";
      data.forEach((item) => {
        genres += item.name + ", ";
      });
      setJsonGenre(genres.substring(0, genres.length - 1));
    } catch (error) {
      console.log(error);
    }
  };

  const BuildStreaming = async (data) => {
    try {
      let streams = [];
      data.forEach((item) => {
        streams.push(item.name);
      });
      setJsonStreaming(streams);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 2,
          color: "white",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-circle-outline"
                size={30}
                color="white"
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}></View>
        <Text
          style={{
            fontSize: 15,
            marginTop: 20,
            marginRight: 10,
            color: "white",
            fontWeight: "bold",
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {jsonDetail === undefined ? "Genres" : jsonDetail.rating}
        </Text>
      </View>
      <Image
        style={{
          position: "absolute",
          height: windowHeight / 2,
          width: "100%",
          resizeMode: "stretch",
        }}
        source={{
          uri:
            jsonDetail === undefined
              ? "https://w7.pngwing.com/pngs/102/481/png-transparent-anime-desktop-manga-television-show-anime-black-hair-manga-human.png"
              : jsonDetail.images.jpg.large_image_url,
        }}
        placeholder={blurhash}
        transition={1000}
      />
      <ScrollView
        style={{
          flex: 1,
          marginTop: windowHeight / 2.4,
          backgroundColor: "white",
          marginBottom: 60,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 10 }}>
            {jsonDetail === undefined
              ? "Hello World!"
              : jsonDetail.title_english}
          </Text>
          <View style={{ flex: 1 }}></View>
          <Text
            style={{
              fontSize: 12,
              marginTop: 9,
              marginRight: 10,
              color: "black",
            }}
          >
            {jsonDetail === undefined ? "Hello World!" : jsonDetail.status}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 14,
              marginTop: 3,
              marginLeft: 14,
              color: "gray",
            }}
          >
            {jsonGenre === undefined ? "Genres" : jsonGenre}
          </Text>
          <View style={{ flex: 1 }}></View>
          <Text
            style={{
              fontSize: 12,
              marginTop: 3,
              marginRight: 10,
              color: "black",
            }}
          >
            {jsonDetail === undefined ? "Genres" : jsonDetail.broadcast.string}
          </Text>
        </View>

        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 12,
              marginTop: 20,
              marginLeft: 20,
              color: "black",
            }}
          >
            Streaming
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Image
              source={
                jsonStreaming.includes("Crunchyroll")
                  ? require("../../assets/Crunchroll.png")
                  : require("../../assets/Crunchroll.png")
              }
              style={{ width: 30, height: 30 }}
            ></Image>
            <Image
              source={
                jsonStreaming.includes("Netflix")
                  ? require("../../assets/netflix.png")
                  : require("../../assets/netflix.png")
              }
              style={{ width: 30, height: 30, marginLeft: 10 }}
            ></Image>
          </View>
        </View>

        <Text
          style={{
            fontSize: 12,
            marginTop: 20,
            marginLeft: 20,
            color: "black",
          }}
        >
          Synopsis
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            color: "black",
          }}
        >
          {jsonDetail === undefined ? "Hello World!" : jsonDetail.synopsis}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Details;
