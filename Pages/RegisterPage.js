import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View, ImageBackground, Button, ScrollView } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const clientId = '803910078327-rt4aglmhls77n7gmjtr0gj821eo00avd.apps.googleusercontent.com';


const RegisterPage = ({ route, navigation }) => {

    const { user } = route.params;
    const uid = user.id;

    //const [photo, setPhoto] = useState();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [experience, setExperience] = useState("");
    const [struggle, setStruggle] = useState("");
    const [success, setSuccess] = useState("");
    const [help, setHelp] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [terms, setTerms] = useState(false);

    const [usernameTaken, setUsernameTaken] = useState(false);
    
    const styles = StyleSheet.create({
        background: {
            width:"100%", 
            height:"100%"
        },
        logo: {
            textAlign: "center", 
            color: "white",
            fontSize: RFPercentage(11),
            fontFamily: 'MinionPro-CnCapt'
        },
        logoBox: {
            paddingTop:"15%"
        },
        inputTitle: {
            color:"white",
            fontSize:RFPercentage(3.5),
            marginTop:"8%",
            fontFamily: 'MinionPro-CnCapt'
        },
        loginBox: {
            marginLeft: "7%",
            marginRight: "7%",
            padding: "5%",
            height:"30%",
            paddingBottom: "25%"
        },
        textInput: {
            marginTop: "4%",
            borderBottomColor: "white",
            borderBottomWidth: 1.5,
            color: "white",
            height: "14%",
            fontSize: RFPercentage(3.3),
            paddingLeft: "7%",
            fontFamily: 'FuturaStd-Condensed'
        },
        textInputUsername: {
            marginTop: "4%",
            borderBottomColor: "white",
            borderBottomWidth: 1.5,
            color: usernameTaken ? "red" : "white",
            height: "14%",
            fontSize: RFPercentage(3.3),
            paddingLeft: "7%",
            fontFamily: 'FuturaStd-Condensed'
        },
        textInputMultiline: {
            marginTop: "5%",
            borderBottomColor: "white",
            borderBottomWidth: 1.5,
            color: "white",
            height: "17%",
            fontSize: RFPercentage(3.3),
            paddingLeft: "7%",
            paddingRight: "3%",
            fontFamily: 'FuturaStd-Condensed'
        },
        submitBox: {
            width: "100%",
            marginTop: "10%",
            borderRadius: 5,
            height:"25%",
            backgroundColor: "rgb(222, 224, 223)",
        },
        submitText: {
            color:"black", 
            fontSize: RFPercentage(3.5), 
            textAlign:"center", 
            fontFamily:'MinionPro-CnCapt', 
            marginTop:"6%"
        },
        checkSection: {
            flexDirection:"row",
            marginTop:"2%"
        },
        checkText: {
            fontSize: RFPercentage(2.5),
            color: "white"
        }
      });
    
    const onRegisterSubmit = () => {

        if(!terms){
            alert("Please accept the terms and conditions to continue.")
        }else{
            const data = {
                firstName: firstname,
                lastName: lastname,
                username: userName,
                gardeningExperience: experience,
                struggleWith: struggle,
                successWith: success,
                needsHelpWith: help,
                yesToNewsletter: newsletter,
                yesToTerms: terms
            };
    
            // Set auth displayName for home screen
            auth().currentUser.updateProfile({displayName: firstname})
    
            firestore().collection('users')
            .doc(uid)
            .update(data)
            .then(() => {
                navigation.navigate('Home', {firstName: firstname})
            })
            .catch((error) => {
                alert(error)
            });
        }
    }

    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        launchImageLibrary(options, response => {
          if (response.uri) {
            setPhoto(response)
          }else{
              console.log("photo error");
          }
        })
    }

    function onUsername(username) {
        setUserName(username);
        firestore().collection('users')
        .get()
        .then(querySnapshot => {
            let isTaken = false;
            querySnapshot.forEach(documentSnapshot => { 
                if((documentSnapshot.data().username) &&
                (documentSnapshot.data().username.toLowerCase() === username.toLowerCase())){
                    isTaken = true;
                }
            });
            return isTaken
        })
        .catch((error) => {
            console.log(error);
        }).then((isTaken) => {
            if(isTaken){
                setUsernameTaken(true);
            }else{
                setUsernameTaken(false);
            }
        })
    }

    return (
        <ImageBackground
            source={require('../images/loginbg.jpeg')}
            style={styles.background}
        >
        <ScrollView style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
            <View style={styles.logoBox}>
                <Text style={styles.logo}>Register</Text>
            </View>
            <View style={styles.loginBox}>
                <Text style={styles.inputTitle}>First Name</Text>
                <TextInput placeholder="First name" placeholderTextColor="white" style={styles.textInput} onChangeText={setFirstName}></TextInput>
                
                <Text style={styles.inputTitle}>Last Name</Text>
                <TextInput placeholder="Last name" placeholderTextColor="white" style={styles.textInput} onChangeText={setLastName}></TextInput>

                <Text style={styles.inputTitle}>Username</Text>
                <TextInput placeholder="Username" placeholderTextColor="white" autoCapitalize="none" style={styles.textInputUsername} onChangeText={onUsername}></TextInput>
                <Text style={{color:"red"}}>{usernameTaken ? "Username Taken" : ""}</Text>
                

                <Text style={styles.inputTitle}>Tell us about your gardening experience!</Text>
                <TextInput placeholder="My gardening experience is..." placeholderTextColor="white" style={styles.textInputMultiline} onChangeText={setExperience} multiline={true}></TextInput>
                
                <Text style={styles.inputTitle}>What do you struggle with in gardening?</Text>
                <TextInput placeholder="I struggle with..." placeholderTextColor="white" style={styles.textInputMultiline} onChangeText={setStruggle} multiline={true}></TextInput>
                
                <Text style={styles.inputTitle}>What do you succeed with in gardening?</Text>
                <TextInput placeholder="I succeed in..." placeholderTextColor="white" style={styles.textInputMultiline} onChangeText={setSuccess} multiline={true}></TextInput>
                
                <Text style={styles.inputTitle}>How can we help you most with your gardening?</Text>
                <TextInput placeholder="I need help with..." placeholderTextColor="white" style={styles.textInputMultiline} onChangeText={setHelp} multiline={true}></TextInput>
                
                <View style={{marginTop:"10%"}}>
                <View style={styles.checkSection}>
                    <BouncyCheckbox onPress={() => setNewsletter(!newsletter)} isChecked={newsletter}/>
                    <Text style={styles.checkText}>Sign up to receive the Persephone newsletter</Text>
                </View>
                <View style={styles.checkSection}>
                    <BouncyCheckbox onPress={() => setTerms(!terms)} />
                    <Text style={styles.checkText}>I agree to the Terms and Conditions</Text>
                </View>
                </View>
                
                <Pressable style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'rgb(13, 59, 102)'
                                : 'rgb(122, 145, 141)'
                        },
                    styles.submitBox
                ]} onPress={onRegisterSubmit}>
                    <View>
                        <Text style={styles.submitText}>SUBMIT</Text>
                    </View>
                </Pressable>
            </View>

        </ScrollView>
        </ImageBackground>
    );
};


export default RegisterPage;