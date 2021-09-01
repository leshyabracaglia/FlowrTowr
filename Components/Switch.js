import React, {useState} from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const Switch = ({children}) => {

    //let lightBulbOff = require("../images/light-bulb.png");
    //let lightBulbOn = require("../images/light-bulb-on.png")

    const [switchColor, setSwitchColor] = useState("white");
    //const [lightImg, setLightImg] = useState(lightBulbOff);

    const styles = StyleSheet.create({
        lightButton: {
            height:"90%",
            width: "28%",
            backgroundColor: lightColor,
            paddingTop: "5%",
            marginTop:"7%",
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

    function onSwitch() {
        if(lightColor === "white"){
            setSwitchColor("rgb(37, 169, 236)")
            //setLightImg(lightBulbOn);
        }else{
            setSwitchColor("white");
            //setLightImg(lightBulbOff);
        }
    }

    return (
        <View style={styles.lightBar}>
            <Pressable style={styles.lightButton} onPress={() => onSwitch()}>
                    {//
                    //<Image source={lightImg} style={{height:"50%", width: "40%", alignItems:"center"}}/>
                    //<Text style={{paddingTop:"8%", fontSize: RFPercentage(2.5)}}>Grow Light</Text>
                    }
                    {children}
            </Pressable>

        </View>
    );
};




export default Switch;
