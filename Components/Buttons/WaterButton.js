import React, {useState} from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const WaterIcon = () => {

    let waterOff = require("../../images/water-tap-black.png");
    let waterOn = require("../../images/water-tap.png");

    const [waterColor, setWaterColor] = useState("white");
    const [waterImg, setWaterImg] = useState(waterOff);

    const styles = StyleSheet.create({
        waterButton: {
            height:"75%",
            width: "60%",
            backgroundColor: waterColor,
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
        }
    });

    function onWaterSwitch() {
        if(waterColor === "white"){
            setWaterColor("rgb(37, 169, 236)")
            setWaterImg(waterOn);
        }else{
            setWaterColor("white");
            setWaterImg(waterOff);
        }
    }

    return (
        <Pressable style={styles.waterButton} onPress={() => onWaterSwitch()}>
                <Image source={waterImg} style={{height:"50%", width: "40%", alignItems:"center"}}/>
                <Text style={{paddingTop:"12%", fontSize: RFPercentage(3.25), fontFamily:"FuturaStd-Condensed"}}>Water</Text>
        </Pressable>
    );
};




export default WaterIcon;
