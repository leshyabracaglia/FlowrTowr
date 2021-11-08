import React, { useState } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native';


const ValueEditor = ({value, color, setValue, modifier, change, image, text}) => {

    let _color = {color};

    let plusBlack = require("../images/plus.png");
    let plus = require("../images/plus_pink.png");
    let minusBlack = require("../images/minus.png");
    let minus = require("../images/minus_pink.png");

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

            <View style={{flexDirection:"row", alignContent:"center", marginTop:"20%"}}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.text}>{value}{modifier}</Text>
            </View>

            <Text style={styles.textTop}>{ text }</Text>

            <Pressable style={{marginTop:"20%"}} onPressIn={onMinus} onPressOut={onMinusOut}>
                <Image source={minusImage} style={styles.button}/>
            </Pressable>                    
        </View>

  );
};

const styles = StyleSheet.create({
    button: {
        height:55, 
        width:55
    }, 
    text: {
        fontSize:RFPercentage(3.0),
        alignItems:"center",
        fontFamily: "Domine-Regular",
        paddingTop:"5%",
        paddingLeft:"5%",
        color: "#EACEDC"
    },
    textTop: {
        fontSize:RFPercentage(2.4), 
        paddingTop:"10%",
        fontFamily: "Domine-Regular",
        color: "#EACEDC"
    },
    image: {
        height:30, 
        width: 30, 
        alignItems:"center",
    },
  });


export default ValueEditor;
