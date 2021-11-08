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
        paddingLeft: "27%",
        paddingTop: "6%"
    },
    startText: {
        fontSize: RFPercentage(2.5),
        fontFamily: "PTSerif-Regular",
        color: "#4c3340"
    }
  });


export default Comment;
