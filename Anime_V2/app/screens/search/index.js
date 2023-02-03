import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons.
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Search = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

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
          style={{ width: "80%", marginLeft: 10 }}
        ></TextInput>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f9c2ff",
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 32 }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
