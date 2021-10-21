import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import LikeButton from './LikeButton';
import CommentButton from './CommentButton';


const CommunityPost = ({postData, id, navigation}) => {

    const [userImage, setUserImage] = useState(null)

    useEffect(() => {
        let uid = auth().currentUser.uid;
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            setUserImage({uri: user.data().imageUri})
        });
    }, [])

    return (

        <View style={styles.postBox}>
            <View style={styles.postHeader}>
                <Image source={userImage} style={{width: "9%", height:"90%", marginLeft:"1%", marginTop:"1%", borderRadius:50, borderColor:"black", borderWidth:1}}/>
                <Text style={styles.name}>{postData.username}</Text>
            </View>
            <View style={styles.postBody}>
                <Text style={{color: "black", fontFamily:"MinionPro-CnCapt", fontSize: RFPercentage(2.9), height:60}}>{postData.post}</Text>
                <Image source={postData.image} style={{width: "10%", height:"35%", marginLeft:"75%", marginTop:"5%"}}/>
                <View style={{flexDirection:"row", marginTop:"6%", float:"right", height:50, width:"100%"}}>
                    <LikeButton postId={id} postData={postData}/>
                    <CommentButton navigation={navigation} postData={postData} postId={id}/>
                </View>
            </View>
        </View>
    )
};
      

const styles = StyleSheet.create({
    postBox: {
        width:"95%", 
        paddingLeft:"5%", 
        paddingTop:"5%"
    },
    postHeader: {
        backgroundColor:"rgb(239, 239, 239)", 
        padding:"2%", 
        borderTopRightRadius:20, 
        height:50,
        flexDirection:"row"
    },
    postBody: {
        backgroundColor:"rgb(245, 245, 245)", 
        padding:"5%", 
        borderBottomLeftRadius:20,
        height: 240
    },
    name: {
        height:100, 
        padding:"2%", 
        fontFamily: "FuturaStd-Condensed", 
        fontSize: RFPercentage(3.1)
    }
  });


export default CommunityPost;
