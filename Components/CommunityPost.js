import React, { useImperativeHandle, useState, useEffect } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';


const CommunityPost = ({postData}) => {

  //const [message, setMessage] = useState("");
  //const [posts, setPosts] = useState([]);

    return (

        <View style={styles.postBox}>
            <View style={styles.postHeader}>
                <Text style={styles.name}>{postData.firstName}</Text>
            </View>
            <View style={styles.postBody}>
                <Text style={{color: "black", fontFamily:"MinionPro-CnCapt", fontSize: RFPercentage(2.8)}}>{postData.post}</Text>
                <View style={{flexDirection:"row", paddingTop:"6%", float:"right"}}>
                    <Pressable style={{float: "right"}}>
                        <Image source={require("../images/like.png")} style={{height:20, width: 20}}></Image>
                    </Pressable>
                    <Pressable>

                    </Pressable>
                </View>
            </View>
        </View>

    )
};
      

const styles = StyleSheet.create({
    postBox: {
        width:"90%", 
        paddingLeft:"10%", 
        paddingTop:"10%"
    },
    postHeader: {
        backgroundColor:"rgb(239, 239, 239)", 
        padding:"3%", 
        borderTopRightRadius:20, 
        height:50
    },
    postBody: {
        backgroundColor:"rgb(245, 245, 245)", 
        padding:"7%", 
        borderBottomLeftRadius:20
    },
    name: {
        height:150, 
        padding:"2%", 
        fontFamily: "FuturaStd-Condensed", 
        fontSize: RFPercentage(3)
    }
  });


export default CommunityPost;
