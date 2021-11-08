import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, Pressable } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const LikeButton = ({postId, postData}) => {

    let like = require("../images/like-green.png");
    let like_black = require("../images/like-grey.png");

    const [likes, setLikes] = useState(0);
    const [didUserLike, setDidUserLike] = useState(false);
    const [post, setPost] = useState({});
    const [likeImage, setLikeImage] = useState(like_black);
    const [username, setUsername] = useState("");

    useEffect(() => {

        let uid = auth().currentUser.uid;
        let username_ = "";
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            username_ = user.data().username;
            setUsername(username_);
            if(postData.likedBy.includes(username_)){
                setDidUserLike(true);
                setLikeImage(like);
            }

        }).catch((error) => {
            console.log(error);
        })

        setPost(postData);
        setLikes(postData.likedBy.length);

    }, []);


    function addLikeFirestore(username) {
        let l = [...post.likedBy];
        l.push(username);
        post.likedBy = l;
        firestore().collection('community').doc(postId)
        .set(post);
    }

    function removeLikeFirestore(username) {
        let l = [...post.likedBy];
        let index = l.indexOf(username);
        if (index !== -1) {
            l.splice(index, 1);
        }
        post.likedBy = l;
        firestore().collection('community').doc(postId)
        .set(post);
    }

    function onLike(){

        let uid = auth().currentUser.uid;
        let username = "";
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            username = user.data().username;
            if(didUserLike){
                setDidUserLike(false);
                setLikes(likes-1);
                removeLikeFirestore(username);
                setLikeImage(like_black);
            }else{
                setDidUserLike(true);
                setLikes(l => l+1);
                addLikeFirestore(username);
                setLikeImage(like);
            }
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <Pressable style={{width:"25%", flexDirection:"row"}} onPress={()=>onLike()}>
            <Image source={likeImage} style={styles.iconStyle}></Image>
            <Text style={styles.likes}>{likes} likes</Text>
        </Pressable>
    )
};
      

const styles = StyleSheet.create({
    iconStyle: {
        height: 26, 
        width: 26,
        marginTop: "20%",
        marginLeft:"2%"
    }, 
    likes: {
        fontFamily: "PTSerif-Regular",
        fontSize: RFPercentage(2.5),
        color: "#4c3340",
        paddingLeft: "14%",
        marginTop: "22%",
    }
});


export default LikeButton;
