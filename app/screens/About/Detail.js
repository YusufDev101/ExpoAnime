import React, { useEffect, useState, useRef  } from "react";
import { MaterialIcons   } from "@expo/vector-icons";
import { Searchbar } from 'react-native-paper';

import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";

// Header
import WavyHeader from "../../components/header/WavyHeader";

// API.
import Api from '../../api'

const Detail = ({ route, navigation }) => {
  const [animeObject, getAnimeObject] = useState([]);
  const [animeData, setAnimeData] = useState(
    route.params.initialParams.AnimeObject
  );

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
    }).start();
  };

  useEffect(() => {
  GetAnime();
  }, []);

  const GetAnime = () => {
    Api.GetAnimeSearch(animeData.title).then(async function (response) {
        var count = Object.keys(response.results).length; 
        if (count > 0) {
          getAnimeObject(response.results[0])        
          //console.log('----------------',response.results[0] )   
        } else {
          console.log("--> Error, animeObject");
        }
      })
      .catch(function (error) {
        console.log("animeObject error: ", error);
      });
  };

  const HeaderActionCustom = () => {
    return (
      <View style={styles.container}>
        <WavyHeader
        colorOne={"dodgerblue"}
        colorTwo={"dodgerblue"}
        customStyles={styles.svgCurve}
        customHeight={Dimensions.get("window").height / 2}
        customTop={300}
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <View style={{flexDirection: "row"}}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons 
                style={{
                  left: 25,
                  top: 10,

                }}
                name="arrow-back"
                size={40}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  

  return (
    <AppScreen style={styles.container}>
    
    <HeaderActionCustom />  
    <Image  
         resizeMode={"contain"}
          style={{
            width: 250, 
            height: 300, 
            alignSelf: "flex-end", 
            overflow: "hidden", 
            borderRadius:10, 
            position: "absolute", 
            marginTop: 20, 
            right:20, 
            backgroundColor: "transparent", 
            zIndex: 2 
          }}
          source={{
            uri: animeObject.image_url,
          }}
        />

  <Animated.View  style={{
          alignItems: "center",
          marginLeft: 40,
          padding: 5,
          position: "absolute", 
          marginTop: 240,
          zIndex: 2,
        flexDirection: "row"
        }} >

          <MaterialIcons name="movie" size={30} color="black" />
          <Text style={{marginLeft: 15, fontSize: 25}}> {animeObject.type}</Text>
  </Animated.View>

    <ScrollView style={{
      flex: 1,
      backgroundColor: "white",
      borderTopLeftRadius: 100,
      //borderTopRightRadius: 60,
      marginTop: 150,
      height: Dimensions.get("window").height,
    }}>     
    

    <Text 
      style={{
        padding: 10,
        alignItems: "center",
        marginTop: 140,
        marginBottom: 20,
        marginLeft: 20,
        fontSize: 30,
        backgroundColor: "white",
        marginRight: 20,
        elevation: 10,
        borderRadius: 10
      }}> {animeObject.title}</Text>
      
      <Text 
      style={{
        padding: 5,
        alignItems: "center",
        marginTop: 10,
        marginRight: 10,
        marginLeft: 20,
        fontSize: 20,
        color: "#004080",
        
      }}> {animeObject.synopsis}</Text>

<Text 
      style={{
        alignItems: "center",
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,  
        padding: 5,
      
      }}> {animeObject.start_date}</Text>

<Text 
      style={{
        alignItems: "center",
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
        padding: 5,
       
      }}> {animeObject.airing}</Text>

      

<Text 
      style={{
        alignItems: "center",
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
      
        marginBottom: 50
      }}> {animeObject.rated}</Text>
    </ScrollView>   

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
    marginTop: 20,
  },
  image: {
    marginLeft: 10,
    marginTop: 10,
    width: Dimensions.get("window").width / 2 - 20,
    height: Dimensions.get("window").height / 3.5,
  },

});

export default Detail;
