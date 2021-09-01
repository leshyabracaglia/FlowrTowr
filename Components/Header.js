import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';



const Header = ({ navigation, title }) => {

  return (
    <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../images/left-arrow.png")} style={styles.image}/>
        </Pressable>
        <View style={{alignItems:"center", width: "85%"}}>
          <Text style={styles.text}>{title}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor:"rgba(255, 255, 255, 0.6)",
        height: 70,
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowColor:"black",
        //paddingTop: "4.5%",
        paddingLeft: "4%",
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: RFPercentage(4.5),
        textAlign: "center",
        fontFamily:'Bodoni 72 Smallcaps'
    },
    image: {
      height:30, 
      width: 30, 
      alignItems:"center", 
      marginTop:"25%"
    }
});

export default Header;
