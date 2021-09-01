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

GoogleSignin.configure({
    iosClientId: clientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
});

const LandingPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("current user");
    console.log(auth().currentUser);

    // Try catch to avoid throwing error if no user is signed in
    //try{
    //    console.log(Object.keys(auth().currentUser));
    //}catch{
     //   console.log("No user signed in");
    //}
    
    // If user is already logged in (persistent), no need to log in
    // Grab user info and navigate to the home screen
    if(auth().currentUser !== null && Object.keys(auth().currentUser).length > 0){
        let loggedInUser = auth().currentUser;
        try{
            data = {
                firstName: loggedInUser.userInfo.user.givenName,
                photo: loggedInUser.userInfo.user.photo, 
            }
        }catch{
            data = {
                firstName: loggedInUser.displayName,
                photo: null,
            }
        }
        navigation.navigate("Home", data);
    }


    const onRegisterPress = () => {
        console.log(email);
        console.log(password);

        // Create the user
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((_loggedInUser) =>{
            return _loggedInUser
        }).catch((error)=>{
            console.log('Register fail with error!');
            console.log(error);
            // Alert if registration error
            alert(error);
        // Save email and uid to firebase db
        }).then((_loggedInUser) => {
            console.log("logged in user:");
            console.log(_loggedInUser);
            const uid = _loggedInUser.user.uid;
            const data = {
                id: uid,
                email: email,
            };
            firestore().collection('users')
            .doc(uid)
            .set(data)
            .then(() => {
                // Navigate to registration form w uid and email
                setEmail("");
                setPassword("");
                navigation.navigate('Register', {user: data})
            })
            .catch((error) => {
                // Alert if navigation/data error
                alert(error)
            });
        })
    }

    
    signIn = async () => {
        /*try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setLoggedInUser({userInfo});
            console.log(loggedInUser);
            navigation.navigate("Home", {
                firstName: loggedInUser.userInfo.user.givenName,
                photo: loggedInUser.userInfo.user.photo,
            });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                Alert.alert(
                    "Google Sign In Cancelled",
                    "Please Try Again",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                console.log("signin cancelled");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert(
                    "Play Services Not Available",
                    "Please Try Again",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                // play services not available or outdated
            } else {
                console.log(error.code);
                Alert.alert(
                    "Google Sign In Error",
                    "Please Try Again",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed else") }
                    ]
                  );
                // some other error happened
            }
        }*/
    };
    

    return (
        <ImageBackground
            source={require('../images/loginbg.jpeg')}
            style={styles.background}
        >
        <View style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.2)"}}>

            <View style={styles.logoBox}>
                <Text style={styles.logo}>Persephone</Text>
            </View>

            <View style={styles.registerBox}>
                <Text style={styles.registerText}>Register</Text>
                <TextInput placeholder="Email" placeholderTextColor="white" style={styles.textInput} onChangeText={setEmail}></TextInput>
                <TextInput placeholder="Password" placeholderTextColor="white" style={styles.textInput} onChangeText={setPassword} secureTextEntry={true}></TextInput>
                
                <Pressable style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'rgb(13, 59, 102)'
                                : 'rgb(122, 145, 141)'
                        },
                    styles.submitBox
                ]} onPress={onRegisterPress}>
                    <View>
                        <Text style={styles.submitText}>SUBMIT</Text>
                    </View>
                </Pressable>
            </View>

            {/*
            <View>
                <Text style={{color:"white", fontSize: RFPercentage(3.5), textAlign:"center", fontFamily:'Bodoni 72 Smallcaps'}}>or</Text>
            </View>

            <GoogleSigninButton
                style={{ width: "80%", height: "6%", marginTop:"5%", marginLeft:"10%"}}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            />
            **/}
                
            <View style={{flex:2}}>
                <Text style={styles.haveAccount}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>Login</Text>
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
        fontFamily: "MinionPro-CnCapt"
    },
    logoBox: {
        paddingTop:"15%",
        flex: 1,
    },
    registerBox: {
        marginLeft: "7%",
        marginRight: "7%",
        padding: "3%",
        flex: 3,
    },
    textInput: {
        marginTop: "8%",
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        height: "14%",
        fontSize: RFPercentage(3.5),
        paddingLeft: "5%",
        fontFamily:'FuturaStd-Condensed'
    },
    submitBox: {
        width: "100%",
        marginTop: "8%",
        borderRadius: 5,
        height:"15%",
        backgroundColor: "white"
    },
    submitText: {
        color:"black", 
        fontSize: RFPercentage(3), 
        textAlign:"center", 
        fontFamily:"MinionPro-CnCapt", 
        marginTop:"6%"
    },
    registerText: {
        color:"white", 
        fontSize: RFPercentage(6), 
        textAlign:"center", 
        fontFamily:'FuturaStd-Condensed',
        paddingBottom:"2%"
    },
    haveAccount: {
        color:"white", 
        textAlign:"center", 
        fontSize:RFPercentage(4), 
        fontFamily: 'FuturaStd-Condensed'
    },
    loginText: {
        color:"white", 
        textAlign:"center", 
        fontSize: RFPercentage(6), 
        marginTop:"4%", 
        fontFamily:"MinionPro-CnCapt"
    }
  });

export default LandingPage;