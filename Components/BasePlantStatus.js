import React, {useState} from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import ValueEditor from './ValueEditor';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


const BasePlantStatus = () => {

    const humidityColor = "rgb(1,181, 100)";

    const [humidity, setHumidity] = useState(20);
    const [temp, setTemp] = useState(28);


    return (
        <View style={styles.statusBar}>


                    <View style={styles.statusItem}>
                        <Image source={require("../images/humidity.png")} style={styles.image}/>
                        <Text style={styles.textTop}>   Humidity</Text>
                        <Text style={styles.textBottom}>{humidity}%</Text>
                    </View>
                    

                <View style={styles.statusItem}>
                    <Image source={require("../images/temperature.png")} style={styles.image}/>
                    <Text style={styles.textTop}>Temperature</Text>
                    <Text style={styles.textBottom}>{temp}°F</Text>
                </View>

        </View>
  );
};

const styles = StyleSheet.create({
    statusBar: {
        width: "70%",
        height: "30%",
        flexDirection: "row",
        paddingTop:"5%",
        marginLeft:"10%",
    },
    statusItem: {
        height:"100%",
        width: "50%",
        marginLeft:"2%",
        paddingTop: "10%",
        flexDirection: "column",
        alignItems:"center",
        alignContent:"center"
    },
    textTop: {
        fontSize:RFPercentage(3), 
        paddingTop:"10%",
        paddingLeft:"5%",
        fontFamily: "FuturaStd-Condensed"
    },
    textBottom: {
        fontSize:RFPercentage(3),
        paddingTop:"5%",
        paddingLeft:"10%",
        fontFamily: "FuturaStd-Condensed"
    },
    valueEditorBox: {
        flexDirection:"row", 
        marginTop:"8%", 
        alignItems:"center"
    },
    image: {
        height:"30%", 
        width: "40%", 
        //alignItems:"center"
        marginLeft:"10%"
    }
  });


export default BasePlantStatus;
