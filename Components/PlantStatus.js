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
                    <Image source={require("../images/humidity.png")} style={styles.image}/>
                    <Text style={styles.textTop}>Ambient</Text>
                    <Text style={styles.textBottom}>Humidity</Text>
                    <View style={styles.valueEditorBox}>
                        <ValueEditor value={humidity} 
                                     color="green" 
                                     setValue={_setHumidity} 
                                     modifier="%" 
                                     change={1}>
                        </ValueEditor>
                    </View>
                </View>

                <View style={styles.statusItem}>
                    <Image source={require("../images/temperature.png")} style={styles.image}/>
                    <Text style={styles.textTop}>Ambient</Text>
                    <Text style={styles.textBottom}>Temperature</Text>
                    <View style={styles.valueEditorBox}>
                        <ValueEditor value={temp} 
                                     color="red" 
                                     setValue={_setTemp} 
                                     modifier="°C" 
                                     change={1}>
                        </ValueEditor>
                    </View>
                </View>

                <View style={styles.statusItem}>
                    <Image source={require("../images/ph.png")} style={styles.image}/>
                    <Text style={styles.textTop}>Soil pH</Text>
                    <Text style={styles.textBottom}>Level</Text>
                    <View style={styles.valueEditorBox}>
                        <ValueEditor value={ph} 
                                     color="green" 
                                     setValue={_setPh} 
                                     modifier="" 
                                     change={0.1}>
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
        paddingTop:"15%",
        fontFamily: "FuturaStd-Condensed"
    },
    textBottom: {
        fontSize:RFPercentage(3),
        paddingTop:"1%",
        fontFamily: "FuturaStd-Condensed"
    },
    valueEditorBox: {
        flexDirection:"row", 
        marginTop:"10%", 
        alignItems:"center"
    },
    image: {
        height:49, 
        width: 49, 
        alignItems:"center"
    }
  });


export default PlantStatus;
