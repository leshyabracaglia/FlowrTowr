import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    View,
    ImageBackground,
    Image,
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

    const [newAccount, setNewAccount] = useState(false);

    console.log("current user");
    console.log(auth().currentUser);
    
    // If user is already logged in (persistent), no need to log in
    // Grab user info and navigate to the home screen
    useEffect(() => {
        if(auth().currentUser !== null && Object.keys(auth().currentUser).length > 0 && !newAccount){
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
            navigation.navigate("HomeBase", data);
        }
    })

    const onRegisterPress = () => {
        console.log(email);
        console.log(password);

        // Create the user
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((_loggedInUser) =>{
            setNewAccount(true);
            return _loggedInUser
        }).catch((error)=>{
            if (error.code === 'auth/email-already-in-use'){
                Alert.alert("Email already in use", 
                ("There is already an account associated with " + email + ".\nPlease login or use a new email."),
                [
                    { text: "Ok", onPress: () => console.log("OK Pressed") },
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
            console.log(data);
            firestore().collection('users')
            .doc(uid)
            .set(data)
            .then(() => {
                // Navigate to registration form w uid and email
                console.log("hihello");
                setEmail("");
                setPassword("");
                console.log("about to navigate to register")
            })
            .catch((error) => {
                // Alert if navigation/data error
                console.log("second catch error");
                alert(error)
            }).then(() => {
                navigation.navigate('Register', {user: data})
            });
        })
    };
    

    return (
        <View style={{height:"100%", width:"100%", backgroundColor:"#062d19"}}>

            <View style={styles.logoBox}>
                <Image 
                    source={require('../images/logo_horizontal.png')}
                    style={{width:"90%", alignContent:"center", height:"50%"}}
                ></Image>
            </View>

            <View style={{flex: 1}}>
                {//Placeholder for image
                }
            </View>

            <View style={styles.registerBox}>
                <Text style={styles.registerText}>Register</Text>
                <TextInput placeholder="Email" placeholderTextColor="#EACEDC" style={styles.textInput} onChangeText={setEmail}></TextInput>
                <PasswordField setPassword={(x) => setPassword(x)}/>
                <SubmitButton onSubmit={onRegisterPress}/>
            </View>
                
            <View style={{flex:1}}>
                <Text style={styles.haveAccount}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width:"100%", 
        height:"120%",
        backgroundColor:"#062d19"
    },
    logo: {
        textAlign: "center", 
        color: "white",
        fontSize: RFPercentage(9),
        fontFamily: "Domine-Regular"
    },
    logoBox: {
        paddingTop:"15%",
        flex: 1,
        alignContent: "center",
        alignItems: "center",
    },
    registerBox: {
        marginLeft: "7%",
        marginRight: "7%",
        padding: "3%",
        flex: 2,
    },
    textInput: {
        borderBottomColor: "#EACEDC",
        borderBottomWidth: 1.5,
        color: "#EACEDC",
        height: "14%",
        paddingTop: "1.5%",
        fontSize: RFPercentage(3.3),
        paddingLeft: "1%",
        fontFamily: 'PTSerif-Italic'
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
        color:"#EACEDC", 
        fontSize: RFPercentage(5.5), 
        textAlign:"center", 
        fontFamily: 'PTSerif-Regular',
        marginTop: "5%",
        paddingBottom:"2%"
    },
    haveAccount: {
        color:"#EACEDC", 
        textAlign:"center", 
        fontSize:RFPercentage(3.7), 
        fontFamily: 'PTSerif-Regular',
    },
    loginText: {
        color:"#EACEDC", 
        textAlign:"center", 
        fontSize: RFPercentage(5.6), 
        marginTop:"4%", 
        fontFamily: 'Domine-Regular'
    }
  });

export default LandingPage;