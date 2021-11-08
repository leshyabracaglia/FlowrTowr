import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Pressable } from 'react-native';

import BottomNavBar from "../BottomNavBar";

import { RFPercentage } from "react-native-responsive-fontsize";


const HomeScreenLayout = ({ first, navigation, children }) => {

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <Pressable style={{alignItems:"center"}}onPress={() => navigation.navigate("Profile")}>
                        <Image source={require("../../images/logo_horizontal.png")} style={{height:"51%", width:"80%", marginTop:"7%"}}></Image>
                </Pressable>
                <Text style={styles.h1}>Hello, {first}!</Text>
                <Text style={styles.h2}>Good Evening</Text>
            </View>
            { children }
            <BottomNavBar navigation={navigation}></BottomNavBar>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: RFPercentage(4.2),
        fontFamily:'MinionPro-CnCapt',
        textAlign:"center",
        color: "#EACEDC"
    },
    h2: {
        fontSize: RFPercentage(3.0),
        fontFamily: 'MinionPro-CnCapt',
        textAlign:"center",
        color: "#EACEDC"
    },
    background: {
        backgroundColor: "#062d19",
        height: "100%",
    },
    header: {
        height:"20%", 
        alignContent:"center", 
        width:"100%"
    }
  });


export default HomeScreenLayout;
