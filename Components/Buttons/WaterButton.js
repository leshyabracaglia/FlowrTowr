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

    const [waterColor, setWaterColor] = useState("#EACEDC");
    const [waterImg, setWaterImg] = useState(waterOff);

    const styles = StyleSheet.create({
        waterButton: {
            height:"65%",
            width: "50%",
            backgroundColor: waterColor,
            paddingTop: "7%",
            alignItems:"center",
            borderRadius: 15,
            shadowOffset: {
                width: 0,
                height: -0
            },
            marginRight:"30%",
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowColor:"black",
            marginTop: "15%"
        },
        waterText: {
            paddingTop:"7%", 
            color: "#0B4D2C",
            fontSize: RFPercentage(2.3), 
            fontFamily:"PTSerif-Regular"
        }
    });

    function onWaterSwitch() {
        if(waterColor === "#EACEDC"){
            setWaterColor("#18aa61")
            setWaterImg(waterOn);
        }else{
            setWaterColor("#EACEDC");
            setWaterImg(waterOff);
        }
    }

    return (
        <Pressable style={styles.waterButton} onPress={() => onWaterSwitch()}>
                <Image source={waterImg} style={{height:"50%", width: "40%", alignItems:"center"}}/>
                <Text style={styles.waterText}>Water</Text>
        </Pressable>
    );
};




export default WaterIcon;
