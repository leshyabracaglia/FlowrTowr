import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RFPercentage } from "react-native-responsive-fontsize";

import Header from "../Components/Header";


const Comment = ({ username, comment }) => (
    <View style={styles.postBox}>
        <View style={styles.postHeader}>
            <Text style={styles.name}>{username}</Text>
        </View>
        <View style={styles.postBody}>
            <Text style={{color: "black", fontFamily:"MinionPro-CnCapt", fontSize: RFPercentage(2.9)}}>{comment}</Text>
        </View>
    </View>
);

const PostComments = ({ route, navigation }) => {

    const [postData, ] = useState(route.params.postData);
    const [postId, ] = useState(route.params.postId);
    console.log(postData);
    const [comments, setComments] = useState(postData.comments)

    function addComment(comment){
        let c = [...comments];
        c.push(comment);
        setComments(c);
    }

    return (

        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} title={"Comments"}></Header>
            <ScrollView style={{height:"80%"}}>
            {
            comments.map((comment, i) => {
                return(
                    <Comment username={comment.username} comment={comment.comment} key={i}/>
                )
            })
            }
            </ScrollView>
            <Pressable style={styles.commentBox} onPress={() => navigation.navigate("NewComment", {postId: postId, addComment: addComment})}>
                <Text style={{fontSize:RFPercentage(2.9)}}>Comment...</Text>
            </Pressable>
        </SafeAreaView>

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
        height:40
    },
    postBody: {
        backgroundColor:"rgb(245, 245, 245)", 
        padding:"5%", 
        borderBottomLeftRadius:20
    },
    name: {
        height:100, 
        padding:"2%", 
        fontFamily: "FuturaStd-Condensed", 
        fontSize: RFPercentage(3.1)
    },
    commentBox: {
        height:"20%", 
        backgroundColor:"white",
        padding: "7%"
    },
    comment: {
        borderWidth: 1, 
        borderColor:"black", 
        width: "90%", 
        alignSelf:"center", 
        height: "50%", 
        margin:"5%",
        padding: "3%"
    },
    postBox: {
        width:"95%", 
        paddingLeft:"5%", 
        paddingTop:"5%"
    },
    postHeader: {
        backgroundColor:"rgb(239, 239, 239)", 
        padding:"2%", 
        borderTopRightRadius:20, 
        height:40
    },
    postBody: {
        backgroundColor:"rgb(245, 245, 245)", 
        padding:"5%", 
        borderBottomLeftRadius:20
    },
    name: {
        height:100, 
        padding:"2%", 
        fontFamily: "FuturaStd-Condensed", 
        fontSize: RFPercentage(3.1)
    }, 
    container: {
        backgroundColor: "rgb(191, 203, 194)",
    }
  });


export default PostComments;
