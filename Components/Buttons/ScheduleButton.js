import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";


const ScheduleButton = ({day}) => {

    function onPress(){
        console.log("hi");
    }

    return (
        <Pressable style={
            ({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? "#daa9c2"
                        : "#EACEDC"
                },
            styles.button
        ]} onPress={() => onPress()}>
            <Text style={styles.text}>{day}</Text>
        </Pressable>
    );

};

const styles = StyleSheet.create({
    button: {
        width: "12%",
        height: "100%",
        marginLeft: "1.3%",
        marginRight: "1%",
        paddingTop: "2%",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#daa9c2",
        shadowOffset: {
            width: 0,
            height: -0
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowColor:"black"
    },
    text: {
        fontSize: RFPercentage(2.0),
        fontFamily: 'Domine-Regular',
        textAlign: "center",
        color: "#0B4D2C"
    }
});


export default ScheduleButton;
