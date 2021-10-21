import React from 'react';
import { StyleSheet, Image, View, Pressable, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';


const BottomNavBar = ({ navigation }) => {

  return (
        <View style={styles.navBar}>
            <Pressable onPress={() => navigation.push("Community")} style={{alignContent:"center", alignItems:"center", width:"33%"}}>
                <View style={styles.navItem}>
                    <Image source={require("../images/blog.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Community</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("Blog")} style={{alignContent:"center", alignItems:"center", width:"33%"}}>
                <View style={styles.navItem}>
                    <Image source={require("../images/news.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Blog</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.push("Shop")} style={{alignContent:"center", alignItems:"center", width:"33%"}}>
                <View style={styles.navItem}>
                    <Image source={require("../images/shop.png")} style={styles.icon}/>
                    <Text style={styles.navText}>Shop</Text>
                </View>
            </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "rgb(252, 255, 253)",
        width: "93%",
        height: "13%",
        position: "absolute",
        marginLeft:"3%",
        bottom: "1.6%",
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
        width: "100%",
        height:"100%",
        paddingTop: "17%",
        alignItems:"center",
    },
    icon: {
        height:35, 
        width: 35, 
        alignItems:"center"
    },
    navText:{
        fontSize: RFPercentage(2.7),
        fontFamily: 'MinionPro-CnCapt',
        color: "rgb(72, 93, 36)",
        paddingTop: "7%",
        textAlign: "center"
    }
  });


export default BottomNavBar;
