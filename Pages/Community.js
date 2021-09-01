import React, { useImperativeHandle, useState, useEffect } from 'react';
import Header from "../Components/Header";
import { RFPercentage } from "react-native-responsive-fontsize";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView
} from 'react-native';


const Community = ({ navigation }) => {

  const [message, setMessage] = useState("");
  const [querySnapshot, setQuerySnapshot] = useState([]);

  useEffect(() => {
    setQuerySnapshot([]);
    firestore().collection('community')
    .get()
    .then(_querySnapshot => {
      console.log('Total posts: ', _querySnapshot.size);
      //console.log(_querySnapshot);
      //setQuerySnapshot(_querySnapshot);
      _querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot);
        let snap = [...querySnapshot];
        console.log
        snap.push(documentSnapshot);
        setQuerySnapshot(snap);
        console.log(querySnapshot);
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  
  function post(){

    const data = {
      firstName: auth().currentUser.displayName,
      post: message,
    };

    firestore().collection('community')
    .add(data)
    .then(() => {
      setMessage("");
      alert("Post Made!");
    })
    .catch((error) => {
      alert(error);
    });

  }

  return (
    <SafeAreaView style={styles.background}>
        <ScrollView style={styles.background}>

            <Header navigation={navigation} title={"Community"}></Header>

            <View style={{width:"90%", paddingLeft:"10%", paddingTop:"10%"}}>
              <View style={{backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center", borderTopRightRadius:20, height:150}}>
                <TextInput placeholder="Ask a question or share with the community..." placeholderTextColor="black" style={styles.textInput} multiline={true} onChangeText={setMessage}></TextInput>
              </View>
              <View style={{backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderBottomLeftRadius:20, flexDirection:"row"}}>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={post}>
                  <Text style={styles.buttonText}>Post</Text>
                </Pressable>
              </View>
            </View>

            {
              querySnapshot.map(documentSnapshot => {
                console.log(documentSnapshot);
                return(
                  <View style={{width:"90%", paddingLeft:"10%", paddingTop:"10%"}}>
                    <View style={{backgroundColor:"rgb(239, 239, 239)", padding:"3%", borderTopRightRadius:20, height:50}}>
                      <Text style={styles.name}>{documentSnapshot.data().firstName}</Text>
                    </View>
                    <View style={{backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderBottomLeftRadius:20, flexDirection:"row"}}>
                      <Text style={{color: "black"}}>{documentSnapshot.data().post}</Text>
                    </View>
                  </View>
                )
            
              })
            }
          
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
    },
    h2: {
        fontSize: 20
    },
    background: {
        backgroundColor: "rgb(222, 224, 223)",
        height: "100%"
    },
    button: {
      backgroundColor:"black",
      width: "40%",
      padding: "3%",
      textAlign:"center",
      marginLeft: "5%",
      marginRight: "5%",
      borderRadius: 5
    },
    buttonText: {
      color: "white",
      textAlign:"center",
      fontSize: RFPercentage(2.8),
      fontFamily: "MinionPro-CnCapt"

    },
    textInput: {
      height:150, 
      padding:"4%", 
      fontFamily: "FuturaStd-Condensed", 
      fontSize: RFPercentage(3)
    },
    name: {
      height:150, 
      padding:"2%", 
      fontFamily: "FuturaStd-Condensed", 
      fontSize: RFPercentage(3)
    }
  });


export default Community;
