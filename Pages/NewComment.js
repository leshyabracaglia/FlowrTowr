import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Header from "../Components/Header";


const NewComment = ({ route, navigation }) => {

    const [postId, ] = useState(route.params.postId);
    const addComment = route.params.addComment;
    const [comment, setComment] = useState("");

    function onComment(){

        let uid = auth().currentUser.uid;
        let username = "";
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            username = user.data().username;

            data = {
                username: username,
                comment: comment,
                timestamp: parseInt((new Date().getTime() / 1000).toFixed(0)),
            }

            let comments = []

            firestore().collection('community')
            .doc(postId).get()
            .then((doc) => {
                comments = doc.data().comments;
                comments.push(data);
                console.log(comments);

                firestore().collection('community')
                .doc(postId)
                .update("comments", comments)
                .then(() => {
                    setComment("");
                    addComment(data);
                    //navigation.navigate("Community");
                    navigation.goBack();
                })
                .catch((error) => {
                    alert(error);
                });
            })
            .catch((error) => {
                alert(error);
            })
            
        });

        

    }

    function onCancel(){
        navigation.navigate("Community");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={"New Comment"}></Header>
            <TextInput multiline style={styles.commentBox} returnKeyType="done" value={comment} onChangeText={setComment}>
            </TextInput>
            <View style={{flexDirection:"row"}}>
                <Pressable onPress={() => onCancel()}style={{width:"50%", alignItems:"center", height:50, borderColor:"black", borderWidth:1, paddingTop:"3%", backgroundColor: "rgb(191, 203, 194)"}}>
                    <Text style={{fontFamily: "MinionPro-CnCapt", fontSize:RFPercentage(2.7)}}>
                        Cancel
                    </Text>
                </Pressable>
                <Pressable onPress={() => onComment()} style={{width:"50%", alignItems:"center", height:50, borderColor:"black", borderWidth:1, paddingTop:"3%", backgroundColor: "rgb(191, 203, 194)"}}>
                    <Text style={{fontFamily: "MinionPro-CnCapt", fontSize:RFPercentage(2.7)}}>
                        Comment
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
};
      

const styles = StyleSheet.create({
    commentBox: {
        height:"80%", 
        backgroundColor:"white",
        padding: "5%",
        paddingTop: "5%",
        fontSize: RFPercentage(2.9),
        fontFamily: "MinionPro-CnCapt"
    },
  });


export default NewComment;
