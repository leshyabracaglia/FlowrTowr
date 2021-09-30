import React, { useState, useEffect } from 'react';

import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, TextInput, View, ImageBackground, Alert } from 'react-native';

import SubmitButton from '../Components/SubmitButton';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState("");

    const onEmailSubmit = () => {
        auth()
        .sendPasswordResetEmail(email)
        .then((res) =>{
            Alert.alert("Password Reset link sent to " + email, 
                ("Please check your email"),
                [
                    { text: "OK", onPress: () => navigation.navigate("Login") },
                ])
        }).catch((error)=>{
            alert(error);
        });
    }

    return (
        <ImageBackground
            source={require('../images/loginbg.jpeg')}
            style={styles.background}
        >
        <View style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
            <View style={styles.logoBox}>
                <Text style={styles.logo}>Password Recovery</Text>
            </View>
            <View style={styles.loginBox}>
                <TextInput placeholder="Email" placeholderTextColor="white" style={styles.textInput} onChangeText={setEmail}></TextInput>
                <SubmitButton onSubmit={onEmailSubmit}/>
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width:"100%", 
        height:"120%",
        backgroundColor:"rgb(239, 234, 233)"
    },
    logo: {
        textAlign: "center", 
        color: "white",
        fontSize: RFPercentage(7),
        fontFamily: 'MinionPro-CnCapt'
    },
    logoBox: {
        marginTop:"50%"
    },
    loginBox: {
        marginLeft: "4%",
        marginRight: "4%",
        padding: "5%",
        height:"30%",
    },
    textInput: {
        marginTop: "8%",
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        height: "25%",
        fontSize: RFPercentage(3.5),
        paddingLeft: "5%",
        fontFamily: "FuturaStd-Condensed"
    },
    forgot: {
        color: "white",
        fontSize: RFPercentage(3.6),
        textAlign: "center",
        paddingTop:"7%",
        fontFamily: "FuturaStd-Condensed"
    }
  });

export default ForgotPassword;