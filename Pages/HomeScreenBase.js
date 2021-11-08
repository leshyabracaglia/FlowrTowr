import React, { useState } from 'react';

import PlantStatus from "../Components/PlantStatus";
import LightButton from "../Components/Buttons/LightButton";
import WaterButton from "../Components/Buttons/WaterButton";
import Schedule from '../Components/Schedule';

import HomeScreenLayout from '../Components/Layouts/HomeScreenLayout';

import { RFPercentage } from "react-native-responsive-fontsize";
import { createStackNavigator } from '@react-navigation/stack';

//import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

import {
  SafeAreaView,
  StyleSheet,
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

  function onSwap(){
      navigation.navigate("HomeUpdated")
  }

  return (
      <HomeScreenLayout first={first} navigation={navigation}>

          <Schedule/>

          <View style={{height:"25%", flexDirection:"row", alignItems:"center", paddingTop:"4%"}}>
              <View style={{width:"50%", alignContent:"center", alignItems:"center"}}>
                  <LightButton/>
              </View>
              <View style={{width:"50%", alignContent:"center", alignItems:"center"}}>
                  <WaterButton/>
              </View>
          </View>

          {/*<View style={{height:"15%", width:"100%", flexDirection:"row"}}>
              <Pressable onPress={()=>onLock()}style={{width:"50%", alignItems:"center", paddingTop:"10%"}}>
                  <Image source={lockImage} style={{width: "30%", height:"70%"}}/>
              </Pressable>
          </View>
          */}

          <PlantStatus/>

      </HomeScreenLayout>
    
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
        backgroundColor: "#dfddde",
        //backgroundColor: "rgb(239, 234, 233)",
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
