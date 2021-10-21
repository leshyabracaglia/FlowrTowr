import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, ScrollView, Image } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Header from "../Components/Header";
import CommunityPost from '../Components/CommunityPost';


const Community = ({ navigation }) => {


  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [height, setHeight] = useState(150);
  const [image, setImage] = useState(null)

  const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
    },
    h2: {
        fontSize: 20
    },
    background: {
      backgroundColor: "rgb(191, 203, 194)",
        height: "100%",
    },
    button: {
      backgroundColor:"rgb(72, 93, 36)",
      width: "30%",
      padding: "3%",
      textAlign:"center",
      marginLeft: "2%",
      marginRight: "5%",
      height: "100%",
      borderRadius: 5
    },
    buttonText: {
      color: "white",
      textAlign:"center",
      fontSize: RFPercentage(3.0),
      fontFamily: "MinionPro-CnCapt"

    },
    textInput: {
      height:height, 
      padding:"4%", 
      fontFamily: "FuturaStd-Condensed", 
      fontSize: RFPercentage(3),
      width:"95%",
    },
    name: {
      height:150, 
      padding:"2%", 
      fontFamily: "FuturaStd-Condensed", 
      fontSize: RFPercentage(3)
    }
  });

  const [reload, setReload] = useState(0);

  useEffect(() => {
      firestore().collection('community')
      .get()
      .then(querySnapshot => {
          console.log('Total posts: ', querySnapshot.size);
          let postHolder = []
          querySnapshot.forEach(documentSnapshot => {
              postHolder.push(documentSnapshot);
          });
          return postHolder
      })
      .catch((error) => {
          console.log(error);
      }).then((postHolder) => {
          setPosts(postHolder);
      })
  }, [reload])

  function updateSize(height) {
    console.log(height);
    setHeight(height);
  }

  onUpdateImage = () => {
    launchImageLibrary({mediaType:"photo", saveToPhotos: true}, (res) => {
      setImage({uri: res.assets[0].uri});
      setProfileImage(res.assets[0].uri);
  })
}

  function post(){

    let userName = "";
    let uid = auth().currentUser.uid;
    console.log(uid);

    firestore().collection('users').doc(uid).get()
    .then((user) => {
      userName = user.data().username;
            
      const data = {
        username: userName,
        post: message,
        timestamp: parseInt((new Date().getTime() / 1000).toFixed(0)),
        likedBy: [],
        comments: [],
        image: image
      };

      firestore().collection('community')
      .add(data)
      .then(() => {
        setMessage("");
        setImage(null);
        alert("Post Made!");
        setReload(r => r+1);
      })
      .catch((error) => {
        alert(error);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  }

  function onCancel(){
    setMessage("");
  }

  return (
    <SafeAreaView style={styles.background}>
        <Header navigation={navigation} title={"Community"}></Header>
        <ScrollView style={styles.background}>
            <View style={{width:"95%", paddingLeft:"5%", paddingTop:"5%"}}>
              <View style={{backgroundColor:"rgb(239, 239, 239)", paddingTop:"6%", paddingLeft:"3%", alignItems:"center", borderTopRightRadius:20, height:150}}>
                <TextInput placeholder="..." placeholderTextColor="black" style={styles.textInput} value={message} multiline={true} onChangeText={setMessage} onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}></TextInput>
                <Image source={image} style={{width: "10%", height:"45%", marginLeft:"75%"}}/>
              </View>
              <View style={{backgroundColor:"rgb(245, 245, 245)", padding:"3%", borderBottomLeftRadius:20, height: 70, flexDirection:"row"}}>
                <Pressable style={styles.button} onPress={() => onCancel()}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => post()}>
                  <Text style={styles.buttonText}>Post</Text>
                </Pressable>
                <Pressable onPress={() => onUpdateImage()}style={{height:"100%", width:"25%", alignItems:"center"}}>
                    <Image source={require("../images/replace-image.png")} style={{width: "50%", height:"85%", borderRadius:100}}/>
                </Pressable>

              </View>
            </View>

            {
              posts ? posts.sort(function(a, b){return b.data().timestamp - a.data().timestamp}).map((documentSnapshot, i) => {
                return(
                  <CommunityPost postData={documentSnapshot.data()} id={documentSnapshot.id} key={documentSnapshot.id} navigation={navigation}>
                  </CommunityPost>
                )
            
              }) : <CommunityPost postData={{firstName:"Leshya", post:"No community posts :("}}></CommunityPost>
            }
            <View style={{height:30}}></View>
          
        </ScrollView>
    </SafeAreaView>
  );
};


export default Community;
