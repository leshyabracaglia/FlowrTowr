import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';


const SubmitButton = ({ onSubmit }) => {

    return (
        <Pressable style={
        ({ pressed }) => [
            {
                backgroundColor: pressed
                    ? 'rgb(13, 59, 102)'
                    : 'white'
            },
            styles.submitBox
        ]} onPress={() => onSubmit()}>
            <View>
                <Text style={styles.submitText}>SUBMIT</Text>
            </View>
        </Pressable>
    );

};

const styles = StyleSheet.create({
    submitBox: {
        width: "100%",
        marginTop: "15%",
        borderRadius: 5,
        height:60,
    },
    submitText: {
        fontFamily: 'MinionPro-CnCapt',
        color:"black", 
        fontSize: RFPercentage(3.7), 
        textAlign:"center", 
        fontFamily:'FuturaStd-Condensed', 
        marginTop:"6%",
    }
});


export default SubmitButton;