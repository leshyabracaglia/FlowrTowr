import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';



const Header = ({ navigation, title, color }) => {

    console.log(color);
  
    const styles = StyleSheet.create({
      header: {
          backgroundColor: color ? color : "#107040",
          height: 70,
          shadowOffset: {
              width: 0,
              height: 15
          },
          shadowOpacity: 0.06,
          shadowRadius: 10,
          shadowColor:"black",
          paddingLeft: "4%",
          flexDirection: "row",
          alignItems: "center"
      },
      text: {
          fontSize: RFPercentage(4.0),
          textAlign: "center",
          color: "#EACEDC",
          fontFamily:'PTSerif-Regular'
      },
      image: {
        height:30, 
        width: 30, 
        alignItems:"center", 
        marginTop:"25%"
      }
    });

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

export default Header;
