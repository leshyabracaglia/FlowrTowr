import React from 'react';

import { StyleSheet, Text, Pressable, View } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";


const SubmitButton = ({ onSubmit }) => {

    return (
        <Pressable style={
        ({ pressed }) => [
            {
                backgroundColor: pressed
                    ? 'rgb(13, 59, 102)'
                    : '#EACEDC'
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
        marginTop: "10%",
        borderRadius: 5,
        height:50,
    },
    submitText: {
        fontFamily: 'Domine-Regular',
        color:"black", 
        fontSize: RFPercentage(3.2), 
        textAlign:"center", 
        marginTop:"3.8%",
    }
});


export default SubmitButton;