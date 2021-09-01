import React, {useState} from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const LightIcon = () => {

    let lightBulbOff = require("../images/light-bulb.png");
    let lightBulbOn = require("../images/light-bulb-on.png")

    const [lightColor, setLightColor] = useState("white");
    const [lightImg, setLightImg] = useState(lightBulbOff);

    const styles = StyleSheet.create({
        lightButton: {
            height:"70%",
            width: "25%",
            marginLeft:"20%",
            backgroundColor: lightColor,
            paddingTop: "4%",
            alignItems:"center",
            borderRadius: 15,
            shadowOffset: {
                width: 0,
                height: -0
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowColor:"black"
        }
    });

    function onLightSwitch() {
        if(lightColor === "white"){
            setLightColor("rgb(37, 169, 236)")
            setLightImg(lightBulbOn);
        }else{
            setLightColor("white");
            setLightImg(lightBulbOff);
        }
    }

    return (
        <Pressable style={styles.lightButton} onPress={() => onLightSwitch()}>
            <Image source={lightImg} style={{height:"50%", width: "38%", alignItems:"center"}}/>
            <Text style={{paddingTop:"8%", fontSize: RFPercentage(2.8), fontFamily:"FuturaStd-Condensed"}}>Grow Light</Text>
        </Pressable>
    );
};




export default LightIcon;
