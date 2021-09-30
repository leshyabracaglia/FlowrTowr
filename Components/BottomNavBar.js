import React from 'react';

import {
  StyleSheet,
  Image,
  View,
} from 'react-native';


import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const BottomNavBar = ({ navigation }) => {

  return (
        <View style={styles.navBar}>
            <Pressable onPress={() => navigation.push("Community")}>
                <View style={styles.navItem}>
                    <Image source={require("../images/blog.png")} style={styles.icon}/>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("News")}>
                <View style={styles.navItem}>
                    <Image source={require("../images/news.png")} style={styles.icon}/>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("Shop")}>
                <View style={styles.navItem}>
                    <Image source={require("../images/shop.png")} style={styles.icon}/>
                </View>
            </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "rgb(252, 255, 253)",
        width: "90%",
        height: "10%",
        position: "absolute",
        marginLeft:"5%",
        bottom: "3%",
        flexDirection: "row",
        alignContent:"center",
        borderRadius: 0,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor:"black"
    },
    navItem: {
        width:"100%",
        height:"100%",
        paddingLeft: "11%",
        paddingRight: "7%",
        paddingTop: "12%",
        alignItems:"center",
        margin:"2.3%"
    },
    icon: {
        height:32, 
        width: 32, 
        alignItems:"center"
    }
  });


export default BottomNavBar;
