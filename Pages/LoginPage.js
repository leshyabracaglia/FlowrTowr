import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Alert, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';

import SubmitButton from '../Components/SubmitButton';
import PasswordField from "../Components/Inputs/Password";


const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginPress = () => {
        console.log(email);
        console.log(password);
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>{
            setEmail("");
            setPassword("");
            navigation.navigate('Home');  
        }).catch((error)=>{
            setPassword("");
            if(error.code === 'auth/wrong-password'){
                Alert.alert("Incorrect Password", 
                ("Please try again or reset password."),
                [
                    { text: "OK" },
                ])
            }else if(error.code === 'auth/network-request-failed'){
                Alert.alert("Network Error", 
                ("Please try again."),
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                    { text: "Reset Password", onPress: navigation.push("Forgot") },
                ])
            }else{
                alert(error);
            }
        });
    }

    return (
        <ImageBackground
            source={require('../images/loginbg.jpeg')}
            style={styles.background}
        >
        <View style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
            <View style={styles.logoBox}>
                <Text style={styles.logo}>Login</Text>
            </View>
            <View style={styles.loginBox}>
                <TextInput placeholder="Email" placeholderTextColor="white" keyboardType="email-address" style={styles.textInput} onChangeText={setEmail}></TextInput>
                <PasswordField setPassword={(x) => setPassword(x)}/>
                <SubmitButton onSubmit={onLoginPress}/>
                <Pressable onPress={() => navigation.push("Forgot")}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </Pressable>
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
        fontSize: RFPercentage(11),
        fontFamily: 'MinionPro-CnCapt'
    },
    logoBox: {
        marginTop:"30%"
    },
    loginBox: {
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "5%",
        padding: "5%",
        height:"30%",
    },
    textInput: {
        marginTop: "8%",
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        height: "30%",
        fontSize: RFPercentage(3.7),
        paddingLeft: "5%",
        fontFamily: "FuturaStd-Condensed"
    },
    forgot: {
        color: "white",
        fontSize: RFPercentage(3.6),
        textAlign: "center",
        paddingTop:"9%",
        fontFamily: "FuturaStd-Condensed"
    }
  });

export default LoginPage;