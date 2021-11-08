import React from 'react';
import { StyleSheet, Image, View, Pressable, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


const BottomNavBar = ({ navigation }) => {

  return (
        <View style={styles.navBar}>
            <Pressable onPress={() => navigation.push("Blog")} style={styles.navItemPressable}>
                <View style={styles.navItem}>
                    <Image source={require("../images/news.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Blog</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("Community")} style={styles.navItemPressable}>
                <View style={styles.navItem}>
                    <Image source={require("../images/blog.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Community</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("Shop")} style={styles.navItemPressable}>
                <View style={styles.navItem}>
                    <Image source={require("../images/shop.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Shop</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("Profile")} style={styles.navItemPressable}>
                <View style={styles.navItem}>
                    <Image source={require("../images/profile.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Profile</Text>
                </View>
            </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#EACEDC",
        width: "101%",
        height: "11%",
        position: "absolute",
        bottom: "0%",
        flexDirection: "row",
        alignContent:"center",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor:"black",
    },
    navItem: {
        width: "102.5%",
        height:"100%",
        paddingTop: "8%",
        alignItems:"center",
        borderWidth: 1.5,
        borderColor: "#daa9c2"
    },
    navItemPressable: {
        alignContent:"center", 
        alignItems:"center", 
        width:"25%"
    },
    icon: {
        height:35, 
        width: 35, 
        alignItems:"center"
    },
    navText:{
        fontSize: RFPercentage(2.2),
        fontFamily: 'Domine-Regular',
        color: "rgb(72, 93, 36)",
        paddingTop: "5%",
        textAlign: "center",
        color: "#0B4D2C",
    }
  });


export default BottomNavBar;
