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

    const [lightColor, setLightColor] = useState("#EACEDC");
    const [lightImg, setLightImg] = useState(lightBulbOff);

    const styles = StyleSheet.create({
        lightButton: {
            height:"65%",
            width: "50%",
            marginLeft:"30%",
            backgroundColor: lightColor,
            paddingTop: "7%",
            alignItems:"center",
            borderRadius: 15,
            shadowOffset: {
                width: 0,
                height: -0
            },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            shadowColor: "#0B4D2C",
            marginTop: "15%"
        },
        lightText: {
            paddingTop:"7%", 
            fontSize: RFPercentage(2.2), 
            fontFamily:"PTSerif-Regular",
            color: "#0B4D2C"
        }
    });

    function onLightSwitch() {
        if(lightColor === "#EACEDC"){
            setLightColor("#18aa61")
            setLightImg(lightBulbOn);
        }else{
            setLightColor("#EACEDC");
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
