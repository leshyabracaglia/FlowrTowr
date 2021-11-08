import React, {useState} from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import ValueEditor from './ValueEditor';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


const PlantStatus = () => {

    const humidityColor = "rgb(1,181, 100)";

    const [humidity, setHumidity] = useState(20);
    const [temp, setTemp] = useState(28);
    const [ph, setPh] = useState(7.5);

    const _setHumidity = (value) => {
        setHumidity(value);
    }

    const _setTemp = (value) => {
        setTemp(value);
    }

    const _setPh = (value) => {
        if(value>=0 && value<=14){
            console.log(value);
            setPh(parseFloat(value).toFixed(1));
        }
    }

    return (
        <View style={styles.statusBar}>

                <View style={styles.statusItem}>
                    <View style={styles.valueEditorBox}>
                        <ValueEditor 
                            text="Humidity"
                            image={require("../images/humidity.png")}
                            value={humidity} 
                            color="red" 
                            setValue={_setHumidity} 
                            modifier="%" 
                            change={1}>
                        </ValueEditor>
                    </View>
                </View>

                <View style={styles.statusItem}>
                    <View style={styles.valueEditorBox}>
                        <ValueEditor value={temp} 
                                     text="Temperature"
                                     image={require("../images/temperature.png")}
                                     color="red" 
                                     setValue={_setTemp} 
                                     modifier="°C" 
                                     change={1}>
                        </ValueEditor>
                    </View>
                </View>

                <View style={styles.statusItem}>
                    <View style={styles.valueEditorBox}>
                        <ValueEditor value={ph} 
                                     text="Soil pH"
                                     image={require("../images/ph.png")}
                                     color="red" 
                                     setValue={_setPh} 
                                     modifier="" 
                                     change={1}>
                        </ValueEditor>
                    </View>
                </View>

        </View>
  );
};

const styles = StyleSheet.create({
    statusBar: {
        width: "90%",
        marginLeft: "5%",
        height: "45%",
        flexDirection: "row",
        alignItems: "center",
    },
    statusItem: {
        height:"100%",
        width: "33%",
        paddingTop: "2%",
        alignItems:"center",
    },
    textTop: {
        fontSize:RFPercentage(3), 
        paddingTop:"10%",
        fontFamily: "FuturaStd-Condensed"
    },
    textBottom: {
        fontSize:RFPercentage(3),
        paddingTop:"1%",
        fontFamily: "FuturaStd-Condensed"
    },
    valueEditorBox: {
        flexDirection:"row", 
        alignItems:"center"
    },
    image: {
        height:40, 
        width: 40, 
        alignItems:"center"
    },
    text: {
        fontSize:RFPercentage(3.4),
        alignItems:"center",
        fontFamily: "FuturaStd-Condensed",
        paddingTop:"15%"
    }
  });


export default PlantStatus;
