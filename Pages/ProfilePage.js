import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Pressable, TextInput } from 'react-native';

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
    
    const [name, setName] = useState("");
    const [address0, setAddress0] = useState("");
    const [address1, setAddress1] = useState("");



    useEffect(() => {
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            setUser(user.data());
            console.log(user.data());
            setImageSrc({uri: user.data().imageUri})
            setName(user.data().firstName + " " + user.data().lastName);
            if(user.data().address0){
                setAddress0(user.data().address0);
                setAddress1(user.data().address1);
            }
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

    const logout = () => {
        auth().signOut();
        navigation.navigate("Landing")
    }

    updateAddress = (index, value) => {
        console.log(index, value)
        let a = address;
        a[index] = value;
        setAddress(a);
    }

    onUpdateProfile = () => {

        let name_split = name.split(" ");
        let first = name_split.shift();

        let data = {
            firstName: first,
            lastName: name_split.join(" "),
            address0: address0,
            address1: address1
        }

        firestore().collection('users').doc(uid).
        update(data)
        .then((res) => {
            console.log(res);
            alert("Profile Updated");
        }).catch((error) => {
            console.log(error);
        })

    }

    onProfileTakeImage = () => {
        launchCamera({mediaType:"photo", saveToPhotos: true, includeBase64: true}, (res) => {
            console.log(res);
            setImageSrc({uri: res.assets[0].base64});
            setProfileImage(res.assets[0].base64);
        })
    }

    onProfileChooseImage = () => {
        launchImageLibrary({mediaType:"photo", saveToPhotos: true}, (res) => {
            console.log(res);
            setImageSrc({uri: res.assets[0].uri});
            setProfileImage(res.assets[0].uri);
        })
    }

    return (
        <SafeAreaView style={styles.background}>
            <Header navigation={navigation} title={"Profile"}></Header>
            <View style={styles.background}>


            <View style={{textAlign:"center", width:"100%", padding:"2%", paddingBottom:"1%"}}>
                    <Text style={{fontSize:RFPercentage(3.5), textAlign:"center", fontWeight:"bold", fontFamily:'Domine-Regular', color: "#EACEDC"}}>{user.username}</Text>
                </View>

                <View style={{height:"20%", alignItems:"center", paddingBottom:"5%"}}>
                    <Image source={imageSrc} style={{width: "35%", height:"100%", borderRadius:100, borderColor: "#EACEDC", borderWidth:2}}/>
                </View>

                <View style={{flexDirection: "row", width:"100%", height:"8%", alignItems:"center", alignContent:"center"}}>
                    <Pressable onPress={() => onProfileChooseImage()} style={{width:"45%", paddingLeft:"30%"}}>
                        <Image source={require("../images/add-photo-pink.png")} style={{height:"65%", width:45}}/>
                    </Pressable>
                    <Pressable onPress={() => onProfileTakeImage()} style={{width:"50%", paddingLeft:"10%"}}>
                        <Image source={require("../images/take-photo-pink.png")} style={{height:"70%", width:40}}/>
                    </Pressable>
                </View>

                <View style={styles.profileItem}>
                    <Text style={styles.label}>Email:</Text>
                     <Text style={styles.entry}>{user.email}</Text>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.label}>Name: </Text>
                    <TextInput style={styles.textInput} value={name} onChangeText={setName}></TextInput>
                </View>
                <View style={styles.profileItem}>
                    <Text style={styles.label}>Address:</Text>
                    <TextInput style={styles.textInput} value={address0} onChangeText={setAddress0}></TextInput>
                    <TextInput style={styles.textInput} value={address1} onChangeText={setAddress1}></TextInput>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", marginTop:"5%"}}>
                    <Pressable onPress={() => onUpdateProfile()}style={{backgroundColor:"#EACEDC", marginTop:"18%", height:"50%", width:"45%", borderRadius: 5}}>
                        <View >
                            <Text style={{fontFamily:'Domine-Regular', color:"#062d19", textAlign:"center", paddingTop:"8%", fontSize:RFPercentage(2.5)}}>
                                Update Profile
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => logout()}style={{backgroundColor:"#EACEDC", marginTop:"18%", height:"50%", width:"45%", marginLeft:"10%", borderRadius: 5}}>
                        <View >
                            <Text style={{fontFamily:'Domine-Regular', color:"#062d19", textAlign:"center", paddingTop:"8%", fontSize:RFPercentage(2.6)}}>
                                Logout
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: RFPercentage(3.1),
        fontFamily: 'Domine-Regular',
        color: "#EACEDC",
        paddingTop: "3%"
    },
    entry: {
        paddingLeft: "5%",
        paddingTop: "2%",
        fontSize: RFPercentage(2.8),
        fontFamily: 'PTSerif-Italic',
        color: "#EACEDC",
        //"MinionPro-CnCapt"
    },
    profileItem: {
        fontSize: 10,
        height:"13%",
    },
    background: {
        backgroundColor: "#062d19",
        height: "100%",
        padding: "10%"
    },
    textInput: {
        paddingTop: "1%",
        borderBottomColor: "#EACEDC",
        borderBottomWidth: 1.5,
        marginLeft:"5%",
        width:"90%",
        color: "#EACEDC",
        height: "40%",
        fontSize: RFPercentage(2.8),
        paddingLeft: "2%",
        fontFamily: 'PTSerif-Italic',
        alignItems:"center",
        alignContent:"center"
    },
  });


export default Profile;
