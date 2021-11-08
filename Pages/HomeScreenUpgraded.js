import React, { useState } from 'react';
import BottomNavBar from "../Components/BottomNavBar";
import PlantStatus from "../Components/PlantStatus";
import LightButton from "../Components/Buttons/LightButton";
import WaterButton from "../Components/Buttons/WaterButton";
import { RFPercentage } from "react-native-responsive-fontsize";
//import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const HomeScreenUpgraded = ({ navigation }) => {

  console.log(auth().currentUser);
  const locked = require("../images/locked.png");
  const unlocked = require("../images/unlocked.png");

  const [first, setFirst] = useState(auth().currentUser.displayName ? auth().currentUser.displayName : firstName)
  const [lockImage, setLockImage] = useState(unlocked)

  function onLock(){
    if(isLocked){
      setIsLocked(false);
      setLockImage(unlocked);
    }else{
      setIsLocked(true);
      setLockImage(locked);
    }
  }

  function onSwap(){
    navigation.navigate("HomeBase")
  }

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.background}>
        <View style={styles.header}>

          <View style={styles.buttonRow}>
            <View style={{width:"58%"}}>
              <Text style={styles.h1}>Hello, {first}!</Text>
              <Text style={styles.h2}>Good Evening</Text>
            </View>

            <View style={{height:"100%", width:"40%"}}>
                <Image source={require("../images/logo_final.png")} style={{height:"120%", width:"96%", position:"relative", right:"-9%"}}></Image>
            </View>
          </View>
        </View>


        <View style={{height:"23%", flexDirection:"row"}}>
            <View style={{width:"50%", paddingLeft:"10%"}}>
              <LightButton></LightButton>
            </View>
            <View style={{width:"50%", }}>
            <WaterButton></WaterButton>
            </View>
          </View>

          <View style={{height:"15%", width:"100%", flexDirection:"row"}}>
              <Pressable onPress={()=>{navigation.navigate("Schedule")}} style={{width:"33%", alignItems:"center", paddingTop:"8%"}}>
                <Image source={require("../images/schedule.png")} style={{height:"65%", width:"35%"}}/>
              </Pressable>
              {/*
              <Pressable onPress={()=>onSwap()}style={{width:"33%", alignItems:"center", paddingTop:"8%"}}>
                <Image source={require("../images/swap.png")} style={{width: "35%", height:"70%"}}/>
              </Pressable>
              */}
              <Pressable onPress={()=>onLock()}style={{width:"33%", alignItems:"center", paddingTop:"8%"}}>
                <Image source={lockImage} style={{width: "35%", height:"70%"}}/>
              </Pressable>
          </View>

          <PlantStatus></PlantStatus>

          <BottomNavBar navigation={navigation}></BottomNavBar>
          
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: RFPercentage(5.2),
        fontFamily:'MinionPro-CnCapt',
        paddingTop: "6%"
    },
    h2: {
        fontSize: RFPercentage(3.5),
        fontFamily: 'MinionPro-CnCapt',
        paddingTop:"5%"
    },
    background: {
        backgroundColor: "rgb(239, 234, 233)",
        height: "100%"
    },
    header: {
      paddingLeft: "5%", 
      paddingTop: "3%", 
      height:"13%"
    },
    buttonRow: {
      flexDirection:"row", 
      height:"95%",
      marginRight:"1%"
    }
  });


export default HomeScreenUpgraded;