import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    View,
    ImageBackground,
    Alert,
  } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import SubmitButton from '../Components/SubmitButton';
import PasswordField from '../Components/Inputs/Password';


const LandingPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("current user");
    console.log(auth().currentUser);
    
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
            if (error.code === 'auth/email-already-in-use'){
                Alert.alert("Email already in use", 
                ("There is already an account associated with " + email + ".\nPlease login or use a new email."),
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                    { text: "Login", onPress: () => navigation.navigate("Login") },
                ])
            }else{
                alert(error);
            }
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
                console.log("second catch error");
                alert(error)
            });
        })
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
                <PasswordField setPassword={() => setPassword()}/>
                <SubmitButton onSubmit={onRegisterPress}/>
            </View>
                
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