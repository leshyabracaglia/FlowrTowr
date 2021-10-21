import React, { useImperativeHandle, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";


const Comment = ({navigation, postData, postId}) => {

    const [comment, setComment] = useState("");

    return (
        <Pressable style={styles.commentBox} onPress={() => navigation.navigate("Comments", {postData: postData, postId: postId})}>
            <Text style={styles.startText}>Leave a comment...</Text>
        </Pressable>
    )
};
      

const styles = StyleSheet.create({
    commentBox: {
        width:"85%",
        paddingLeft: "25%",
        paddingTop: "4%"
    },
    startText: {
        color: "black",
        fontSize: RFPercentage(2.7),
        fontFamily: "MinionPro-CnCapt"
    }
  });


export default Comment;
