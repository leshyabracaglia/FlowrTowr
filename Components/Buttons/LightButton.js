import React, {useState} from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable
} from 'react-native';


const LightButton = () => {

    let lightBulbOff = require("../../images/light-bulb.png");
    let lightBulbOn = require("../../images/light-bulb-on.png")

    const [lightColor, setLightColor] = useState("white");
    const [lightImg, setLightImg] = useState(lightBulbOff);

    const styles = StyleSheet.create({
        lightButton: {
            height:"75%",
            width: "60%",
            marginLeft:"5%",
            backgroundColor: lightColor,
            paddingTop: "6%",
            alignItems:"center",
            borderRadius: 15,
            shadowOffset: {
                width: 0,
                height: -0
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowColor:"black"
        },
        lightText: {
            paddingTop:"12%", 
            fontSize: RFPercentage(3.25), 
            fontFamily:"FuturaStd-Condensed"
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
            <Image source={lightImg} style={{height:"50%", width: "40%", alignItems:"center"}}/>
            <Text style={styles.lightText}>Grow Light</Text>
        </Pressable>
    );
};


export default LightButton;
