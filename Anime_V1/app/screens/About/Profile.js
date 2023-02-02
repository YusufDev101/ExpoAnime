import React, { useEffect, useState } from "react";
import { Ionicons, AntDesign  } from "@expo/vector-icons";
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

import AppScreen from '../../components/AppScreen'
import AppText from '../../components/AppText'

// Header
import WavyHeader from "../../components/header/WavyHeader";

// API.
import Api from '../../api'

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

const Profile = ({navigation}) => {
  const [url, setUrl] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [animeSearch, setAnimeSearch] = useState();
  const [countPoke, setCountPoke] = useState([]);
  const [state, setState] = useState({
    AnimeData: [],
    activeIndex: 0,
  });
  
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    GetAnime();
  }, []);

  const GetAnime = () => {
    Api.GetAnimeSearch('fairytail').then(async function (response) {
      var count = Object.keys(response).length;
      console.log("response ------------ ", count);  
      if (count > 0) {
        setState({
          ...state,
          AnimeData: response.results,
        });
      } else {
        console.log("--> Error, GetAnime");
      }
    })
    .catch(function (error) {
      console.log("GetAnime error: ", error);
    });
  }


  const HeaderActionCustom = () => {
    return (
      <View style={styles.container}>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={Dimensions.get("window").height / 4}
          customTop={130}
          customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <View style={{flexDirection: "row"}}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <AntDesign 
                style={{
                  left: 20,
                  top: 10,

                }}
                name="menuunfold"
                size={30}
                color="#26D0CE"
              />
            </TouchableOpacity>    

            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                marginLeft: 40,
                marginRight: 10,
                width: Dimensions.get("window").width - 80
              }}
          />
          </View>
        </View>
      </View>
    );
  };
  

  return (
    <AppScreen style={styles.container}>

    <HeaderActionCustom />     

      <View 
      style={{
        width: Dimensions.get("window").width - 40, 
        height: 180, 
        backgroundColor: "red", 
        marginLeft: 20, 
        marginRight: 20, 
        marginTop: 20, 
        borderRadius: 20, 
        elevation: 5}}/>

      <FlatList
        style={{ marginLeft: 5 }}
        numColumns={2}
        data={state.AnimeData}
        keyExtractor={(item) => {
          return item.mal_id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item.title.toString());
              }}
            >
              <LinearGradient
                colors={["white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
              >
                <Image
                  resizeMode={"stretch"}
                  style={styles.image}
                  source={{
                    uri: item.image_url
                  }}
                />
                {/* <View style={styles.cardContent}>
                  <Text
                    style={{
                      color: "#0080ff", 
                      fontSize: 20,
                      marginLeft: 10,
                      marginTop: Dimensions.get("window").height / 7,
                      //position: "absolute",
                    }}
                  >
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>                               
                </View> */}
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 0,
  },
  welcomeText: {
    fontSize: 30,
    color: "gray",
    textAlign: "left",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 30,
    color: "black",
    textAlign: "left",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 5,
  },
  card: {

    //marginLeft: 10,
    //marginTop: 20,
   // padding: 10,
    //borderRadius: 30,
   // width: Dimensions.get("window").width / 2 - 20,
    //height: Dimensions.get("window").height / 3.5,
  },
  image: {
    //marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    width: Dimensions.get("window").width / 2 - 20,
    height: Dimensions.get("window").height / 3.5,
    //alignSelf: "",
    //position: "absolute",
    //marginLeft: Dimensions.get("window").width / 3,
  },

});

export default Profile;
