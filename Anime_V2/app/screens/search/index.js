import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons.
import { AntDesign, Ionicons } from "@expo/vector-icons";

// API
import api from "../../utils/api";

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [jsonData, setJsonData] = useState([]);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const SearchData = async () => {
    try {
      Keyboard.dismiss();
      var value = await api.GetListAnime(searchText);

      setJsonData(value);
    } catch (error) {}
  };

  const setValue = (event) => {
    setSearchText(event);
  };

  const GoToForm = (item) => {
    try {
      navigation.navigate("detailsScreen", {
        data: item,
      });
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 20,
          height: 40,
          width: "90%",
          borderColor: "gray",
          borderWidth: 1,
          elevation: 5,
          backgroundColor: "white",
          borderRadius: 20,
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="search"
          size={24}
          color="black"
          style={{ alignSelf: "center", marginLeft: 10 }}
        />
        <TextInput
          placeholder="search here"
          keyboardType="default"
          returnKeyType="done"
          autoFocus={true}
          clearButtonMode="while-editing"
          style={{ width: "78%", marginLeft: 10 }}
          value={searchText}
          onChangeText={(event) => setValue(event)}
        ></TextInput>
        <TouchableOpacity onPress={() => SearchData()}>
          <Ionicons
            name="arrow-forward"
            size={24}
            color="black"
            style={{ alignSelf: "center", marginRight: 20, marginTop: 5 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={jsonData.data}
        style={{ marginBottom: 100 }}
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
                height: windowHeight / 4.2,
                width: windowWidth / 2.5,
                borderRadius: 10,
                elevation: 5,
                overflow: "hidden",
              }}
            ></Image>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.mal_id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Search;
