import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Modal } from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import LikeButton from './LikeButton';
import CommentButton from './CommentButton';


const CommunityPost = ({postData, id, navigation, deletePost}) => {

    const [userImage, setUserImage] = useState(null);
    const [imageView, setImageView] = useState(null);
    const [inImageView, setInImageView] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        let uid = auth().currentUser.uid;
        firestore().collection('users').doc(uid).get()
        .then((user) => {
            setUserImage({uri: user.data().imageUri})
            setUsername(user.data().username);
        });
    }, [])

    return (

        <View style={styles.postBox}>
            <View style={styles.postHeader}>
                <Image source={userImage} style={{width: "9%", height:"90%", marginLeft:"1%", marginTop:"1%", borderRadius:50, borderColor:"#0B4D2C", borderWidth:1}}/>
                <Text style={styles.name}>{postData.username}</Text>
                { username === postData.username ? 
                <Pressable onPress={() => deletePost(id)}>
                    <Text style={{marginTop:"3%", marginLeft:"69%", fontSize:RFPercentage(3.5), color: "#0B4D2C", fontFamily:"Domine-Regular"}}>☒</Text>
                </Pressable>
                : <View></View>
                }
            </View>
            <View style={styles.postBody}>
                <Text style={{color: "#0B4D2C", fontFamily:"PTSerif-Regular", fontSize: RFPercentage(2.4), height:60, color: "#4c3340"}}>{postData.post}</Text>
                <Pressable onPress={() => setInImageView(true)} style={{height:"35%", width:"10%", marginLeft:"75%",}}>
                    <Image source={postData.image} style={{width: "100%", height:"100%",  marginTop:"5%"}}/>
                </Pressable>
                <View style={{flexDirection:"row", marginTop:"6%", float:"right", height:50, width:"100%"}}>
                    <LikeButton postId={id} postData={postData}/>
                    <CommentButton navigation={navigation} postData={postData} postId={id}/>
                </View>
            </View>

            {
                inImageView ? 
                <Modal visible={true} transparent={true}>
                    <View style={{height:"10%", backgroundColor:"black"}}>
                        <Pressable onPress={() => setInImageView(false)}>
                            <Text style={{color:"white", marginTop:"10%", marginLeft:"8%", fontSize:RFPercentage(4.0)}}>☒</Text>
                        </Pressable>
                    </View>
                    <ImageViewer style={{height:"90%"}} imageUrls={[{url: '', props: {source: postData.image}}]}/>
                    <View style={{backgroundColor:"black", width:"100%", height:"20%"}}></View>
                </Modal>
                : <Text></Text>
            }
            
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
        backgroundColor:"#c87ea3", 
        padding:"2%", 
        borderTopRightRadius:20, 
        height:50,
        flexDirection:"row"
    },
    postBody: {
        backgroundColor:"#EACEDC", 
        padding:"5%", 
        borderBottomLeftRadius:20,
        height: 220
    },
    name: {
        height:100, 
        padding:"2%", 
        color: "#0B4D2C",
        fontFamily: "Domine-Regular", 
        fontSize: RFPercentage(2.8)
    }
  });


export default CommunityPost;
