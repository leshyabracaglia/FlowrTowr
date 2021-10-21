import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Pressable } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { RFPercentage } from "react-native-responsive-fontsize";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Header from "../Components/Header";


const Profile = ({ navigation }) => {

    let uid = auth().currentUser.uid;
    let placeholder_image = require("../images/blank-profile.png");

    const [user, setUser] = useState({})
    const [imageSrc, setImageSrc] = useState(null);


    useEffect(() => {
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            setUser(user.data());
            console.log(user.data());
            setImageSrc({uri: user.data().imageUri})
        });

    }, [])

    setProfileImage = (uri) => {
        let data = {imageUri: uri}
        firestore().collection('users')
        .doc(uid)
        .update(data)
        .then(() => {
            console.log("done");
        })
        .catch((error) => {
            alert(error)
        });
    }

    onProfileTakeImage = () => {
        launchCamera({mediaType:"photo", saveToPhotos: true}, (res) => {
            setImageSrc({uri: res.assets[0].uri});
            setProfileImage(res.assets[0].uri);
        })
    }

    onProfileChooseImage = () => {
        launchImageLibrary({mediaType:"photo", saveToPhotos: true}, (res) => {
            setImageSrc({uri: res.assets[0].uri});
            setProfileImage(res.assets[0].uri);
        })
    }

    return (
        <SafeAreaView style={styles.background}>
            <Header navigation={navigation} title={"Profile"}></Header>
            <View style={styles.background}>


            <View style={{textAlign:"center", width:"100%", padding:"2%", paddingBottom:"8%"}}>
                    <Text style={{fontSize:RFPercentage(3.5), textAlign:"center", fontWeight:"bold", fontFamily:'FuturaStd-Condensed'}}>{user.username}</Text>
                </View>

                <View style={{height:"20%", alignItems:"center", paddingBottom:"5%"}}>
                    <Image source={imageSrc} style={{width: "40%", height:"100%", borderRadius:100, borderColor: "black", borderWidth:2}}/>
                </View>

                <View style={{flexDirection: "row", width:"100%", height:"10%", alignItems:"center", alignContent:"center"}}>
                    <Pressable onPress={() => onProfileChooseImage()} style={{width:"50%", paddingLeft:"25%"}}>
                        <Image source={require("../images/replace-image.png")} style={{height:"65%", width:50}}/>
                    </Pressable>
                    <Pressable onPress={() => onProfileTakeImage()} style={{width:"50%", paddingLeft:"10%"}}>
                        <Image source={require("../images/add-image.png")} style={{height:"60%", width:50}}/>
                    </Pressable>
                </View>

                <View style={styles.profileItem}>
                    <Text style={styles.label}>Email:</Text>
                     <Text style={styles.entry}>{user.email}</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.label}> Name: </Text>
                    <Text style={styles.entry}>{user.firstName} {user.lastName}</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.entry}>{user.address}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: RFPercentage(3.3),
        fontFamily:'FuturaStd-Condensed',
        paddingTop: "5%"
    },
    entry: {
        paddingLeft: "5%",
        paddingTop: "5%",
        fontSize: RFPercentage(3.0),
        fontFamily:"MinionPro-CnCapt"
    },
    profileItem: {
        fontSize: 20
    },
    background: {
        backgroundColor: "rgb(191, 203, 194)",
        height: "100%",
        padding: "10%"
    },
  });


export default Profile;
