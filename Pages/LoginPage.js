import React, { useState, useEffect } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
//import { firebase_ } from '../firebase/config';
import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const clientId = '803910078327-rt4aglmhls77n7gmjtr0gj821eo00avd.apps.googleusercontent.com';

import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  ImageBackground,
  Alert,
} from 'react-native';



const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginPress = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((loggedInUser) =>{
            console.log("logged in user:")
            console.log(loggedInUser);
        }).catch((error)=>{
            console.log('Login fail with error!');
            console.log(error);
            alert(error);
        }).then(() => {
            navigation.navigate('Home')   
        .catch((error) => {
            alert(error)
        });
    })
 
        /*.then((response) => {
            console.log(response);
            const uid = response.user.uid;
            const data = {
                id: uid,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Register', {user: data})
                })
                .catch((error) => {
                    alert(error)
                });
        */
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
                <TextInput placeholder="Email" placeholderTextColor="white" style={styles.textInput} onChangeText={setEmail}></TextInput>
                <TextInput placeholder="Password" placeholderTextColor="white" style={styles.textInput} onChangeText={setPassword}></TextInput>
                <Pressable style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'rgb(13, 59, 102)'
                                : 'rgb(122, 145, 141)'
                        },
                    styles.submitBox
                ]} onPress={onLoginPress}>
                    <View>
                        <Text style={styles.submitText}>SUBMIT</Text>
                    </View>
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
    submitBox: {
        width: "100%",
        marginTop: "10%",
        borderRadius: 5,
        height:"25%",
        backgroundColor: "white"
    },
    submitText: {
        fontFamily: 'MinionPro-CnCapt',
        color:"black", 
        fontSize: RFPercentage(3.5), 
        textAlign:"center", 
        fontFamily:'FuturaStd-Condensed', 
        marginTop:"5%"
    }
  });

export default LoginPage;