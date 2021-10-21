import React, { useState } from 'react';

import BottomNavBar from "../Components/BottomNavBar";
import PlantStatus from "../Components/BasePlantStatus";
import LightButton from "../Components/Buttons/LightButton";
import WaterButton from "../Components/Buttons/WaterButton";

import { RFPercentage } from "react-native-responsive-fontsize";
import { createStackNavigator } from '@react-navigation/stack';

//import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable
} from 'react-native';


const HomeScreenBase = ({ navigation, firstName }) => {

  console.log("hi")
  console.log(auth().currentUser);

  const [first, setFirst] = useState(auth().currentUser.displayName ? auth().currentUser.displayName : firstName)

  const locked = require("../images/locked.png");
  const unlocked = require("../images/unlocked.png");

  const [isLocked, setIsLocked] = useState(false);
  const [lockImage, setLockImage] = useState(unlocked)

  const logout = () => {
    auth().signOut();
    navigation.navigate("Landing")
  }

  function onLock(){
    if(isLocked){
      setIsLocked(false);
      setLockImage(unlocked);
    }else{
      setIsLocked(true);
      setLockImage(locked);
    }
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
                <Pressable onPress={() => navigation.navigate("Profile")}>
                  <Image source={require("../images/logo.jpeg")} style={{height:"111%", width:"96%", position:"relative", right:"-9%"}}></Image>
                </Pressable>
              </View>

            </View>

          </View>

          <View style={{height:"25%", flexDirection:"row", alignItems:"center", paddingTop:"10%"}}>
            <View style={{width:"50%", alignContent:"center", alignItems:"center"}}>
              <LightButton></LightButton>
            </View>
            <View style={{width:"50%", alignContent:"center", alignItems:"center"}}>
            <WaterButton></WaterButton>
            </View>
          </View>

          <View style={{height:"15%", width:"100%", flexDirection:"row"}}>
              <Pressable onPress={()=>{navigation.navigate("Schedule")}} style={{width:"50%", alignItems:"center", paddingTop:"10%"}}>
                <Image source={require("../images/schedule.png")} style={{height:"65%", width:"30%"}}/>
              </Pressable>
              <Pressable onPress={()=>onLock()}style={{width:"50%", alignItems:"center", paddingTop:"10%"}}>
                <Image source={lockImage} style={{width: "30%", height:"70%"}}/>
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
        //paddingLeft:"3%",
        paddingTop:"5%"
    },
    background: {
        backgroundColor: "rgb(239, 234, 233)",
        height: "100%",
    },
    header: {
      paddingLeft: "5%", 
      paddingTop: "3%", 
      height:"15%",
    },
    buttonRow: {
      flexDirection:"row", 
      height:"95%",
      marginRight:"1%"
    }
  });


export default HomeScreenBase;
