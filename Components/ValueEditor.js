import React, { useState } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native';


const ValueEditor = ({value, color, setValue, modifier, change}) => {

    let _color = {color};

    let plus = require("../images/plus.png");
    let plusBlack = require("../images/plus-black.png");
    let minus = require("../images/minus.png");
    let minusBlack = require("../images/minus-black.png");

    const [plusImage, setPlusImage] = useState(plus);
    const [minusImage, setMinusImage] = useState(minus);

    function onPlus() {
        setValue(parseFloat(value)+change); 
        setPlusImage(plusBlack)
    }

    function onPlusOut() {
        setPlusImage(plus);
    }

    function onMinus() {
        setValue(value-change); 
        setMinusImage(minusBlack)
    }

    function onMinusOut() {
        setMinusImage(minus);
    }

    return (

        <View style={{alignItems:"center", marginLeft:"5%"}}>
            <Pressable style={{marginTop:"5%"}} onPressIn={onPlus} onPressOut={onPlusOut}>
                <Image source={plusImage} style={styles.button}/>
            </Pressable>
            
            <View style={{flexDirection:"row", alignContent:"center", marginTop:"10%"}}>
                <View style={styles.statusCircle}></View>
                <Text style={styles.text}>{value}{modifier}</Text>
                {/*
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize: RFPercentage(2.1), color: "red", fontFamily: "MinionPro-CnCapt", paddingLeft: "4%", paddingTop:"1%"}}>Set to: </Text>
                    <Text style={{fontSize: RFPercentage(2.1), color: "red", fontFamily: "MinionPro-CnCapt"}}>xx</Text>
                </View>
                */}
            </View>

            <Pressable style={{marginTop:"10%"}} onPressIn={onMinus} onPressOut={onMinusOut}>
                <Image source={minusImage} style={styles.button}/>
            </Pressable>                    
        </View>

  );
};

const styles = StyleSheet.create({
    statusCircle: {
        marginTop: "10%",
        borderRadius: 30,
        width: 15,
        height: 15,
        marginRight:"10%",
        backgroundColor: "red"
    },
    button: {
        height:40, 
        width:40
    }, 
    text: {
        fontSize:RFPercentage(3.4),
        alignItems:"center",
        fontFamily: "FuturaStd-Condensed",
        paddingTop:"5%"
    }
  });


export default ValueEditor;
