import React, { useState } from 'react';
import BottomNavBar from "../Components/BottomNavBar";
import PlantStatus from "../Components/PlantStatus";
import LightIcon from "../Components/LightIcon";
import WaterIcon from "../Components/WaterIcon";
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
} from 'react-native';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
//const reference = database('hi').ref('hi');

const HomeScreen = ({ navigation }) => {

  console.log(auth().currentUser);

  const logout = () => {
    auth().signOut();
    navigation.navigate("Landing")
  }

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.background}>
          <View style={styles.header}>
            <View style={styles.buttonRow}>

              <Image source={require("../images/logo.jpeg")} style={{height:"100%", width: "25%"}}/>

              <View style={{height:"100%", marginLeft:"50%"}}>
                <Pressable>
                  <Image source={require("../images/profile.png")} style={{height:"61%", width:"40%", marginLeft:"40%"}}></Image>
                </Pressable>
                <Pressable onPress={logout}>
                  <Text style={{fontSize:RFPercentage(2.8), fontWeight:"bold", fontFamily:"FuturaStd-Condensed"}}>Logout</Text>
                </Pressable>
              </View>

            </View>

            <Text style={styles.h1}>Hello, {auth().currentUser.displayName}!</Text>
            <Text style={styles.h2}>Good Morning, Welcome Back.</Text>
          </View>

          <View style={{height:"20%", flexDirection:"row", alignItems:"center"}}>
            <LightIcon></LightIcon>
            <WaterIcon></WaterIcon>
          </View>

          <PlantStatus></PlantStatus>

          <BottomNavBar navigation={navigation}></BottomNavBar>
          
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: RFPercentage(7),
        fontFamily:'MinionPro-CnCapt',
        paddingLeft: "1%",
        paddingTop: "3%"
    },
    h2: {
        fontSize: RFPercentage(3.5),
        fontFamily: 'MinionPro-CnCapt',
        paddingLeft:"5%",
        paddingTop:"2%"
    },
    background: {
        backgroundColor: "rgb(239, 234, 233)",
        height: "100%"
    },
    header: {
      paddingLeft: "5%", 
      paddingTop: "3%", 
      height:"28%"
    },
    buttonRow: {
      flexDirection:"row", 
      height:"45%"
    }
  });


export default HomeScreen;
