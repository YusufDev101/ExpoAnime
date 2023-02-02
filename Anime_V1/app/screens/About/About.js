import React, { useEffect, useState } from "react";
import { Ionicons, AntDesign  } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

import AppScreen from '../../components/AppScreen'
import AppText from '../../components/AppText'

import RegionStats from './RegionStats'
import TrendingStats from './TrendingStats'

// API.
import Api from '../../api'

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

// Header
import WavyHeader from "../../components/header/WavyHeader";

const About = ({navigation}) => { 
  const [url, setUrl] = useState();
  const [countPoke, setCountPoke] = useState([]);
  const [state, setState] = useState({
    AnimeData: [],
    activeIndex: 0,
  });
  
  useEffect(() => {
    GetUpComingAnime();
  }, []);

  const GetUpComingAnime = () => {
    Api.GetAnime().then(async function (response) {
        var count = Object.keys(response).length; 
        if (count > 0) {
          setState({
            ...state,
            AnimeData: response.top,
          });
          console.log('-----------> count', state.AnimeData.length)
        } else {
          console.log("--> Error, GetAnime");
        }
      })
      .catch(function (error) {
        console.log("GetAnime error: ", error);
      });
  };

  const HeaderActionCustom = () => {
    return (
      <View style={styles.container}>
        <WavyHeader
         colorOne={"white"}
         colorTwo={"white"}
          customStyles={styles.svgCurve}
          customHeight={Dimensions.get("window").height / 4}
          customTop={130}
          customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign 
              style={{
                left: 20,
                top: 10,
              }}
              name="menuunfold"
              size={30}
              color="#0059b3"
            />
          </TouchableOpacity>         
        </View>
      </View>
    );
  };
  
  return (
    <AppScreen style={styles.container}>

     <HeaderActionCustom />     

      <View style={{flex: 1, }}> 

      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.headerText}>Yusuf Khan</Text>
          </View>
      </View>

      <LinearGradient
        style={{
          width: Dimensions.get("window").width - 40, 
          height: Dimensions.get("window").height / 3.5, 
          backgroundColor: "red", 
          marginTop: 20, 
          marginLeft: 20,  
          borderRadius: 20, }}
        colors={['#0059b3', '#1a8cff']}
        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}>     

        <Text style={styles.AnimeInfo}>Anime Info</Text>
        <Text style={styles.top}>Top {state.AnimeData.length}</Text>
        <Text style={styles.anime}>Anime</Text>
      
      </LinearGradient>

        <Image  
         resizeMode={"contain"}
            style={{
              width: 250, 
              height: 300, 
              alignSelf: "flex-end", 
              overflow: "hidden", 
              borderRadius:20, 
              position: "absolute", 
              marginTop: 20, 
              right:20, 
              backgroundColor: "transparent", 
              zIndex: 2 
            }}
            source={require('../../assets/kirito-asuna-leafa-sword-art-online-anime-asuna.png')}          
        ></Image>

      </View>

      <ScrollView>

      {/* <TrendingStats dataObject={countPoke}/> */}

        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop:  Dimensions.get("window").height / 2.5 }}>

          <RegionStats dataObject={state.AnimeData} navigation={navigation} />

        </ScrollView>

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
    //fontWeight: "bold",
    color: "gray",
    textAlign: "left",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 30,
    //fontWeight: "bold",
    color: "#0059b3",
    textAlign: "left",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 5,
  },
  AnimeInfo: {
    backgroundColor: "#003366",
    fontSize: 20,
    color: "#e6f2ff",
    marginTop: 20,
    width: 150,
    height: 35,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    left: -5,
    elevation: 50,
    alignItems: "center",
    padding: 5,
  },
  top: {
    fontSize: 25,
    color: "#e6f2ff",
    textAlign: "left",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  anime: {
    fontSize: 25,
    color: "#e6f2ff",
    textAlign: "left",
    alignItems: "flex-start",
    marginLeft: 20,
  },
});

export default About;
