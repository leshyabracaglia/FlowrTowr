import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, Image, View, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";

import Header from "../Components/Header";


const Shop = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.background}>

            <Header navigation={navigation} title={"Shop"}></Header>

            <ScrollView style={{paddingLeft: "4%", paddingTop: "3%"}}>
                
                <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Seeds"})} style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}}>
                    <View style={{width:"50%", backgroundColor:"rgb(239, 239, 239)", padding:"10%", alignItems:"center", borderBottomLeftRadius:20}}>
                        <Image source={require("../images/seed.png")} style={{height:80, width: 80, alignItems:"center"}}/>
                    </View>
                    <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderTopRightRadius:20}}>
                        <Text style={{fontSize:RFPercentage(4.0), fontFamily:'FuturaStd-Condensed'}}>Seeds</Text>
                        <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Accessories"})} style={{width:"90%", paddingLeft:"5%", paddingTop:"10%"}}>
                    <View style={{backgroundColor:"rgb(254, 238, 213)", paddingTop:"7%", alignItems:"center", borderRadius:20}}>
                        <Text style={{fontSize:RFPercentage(4.0), fontFamily:'FuturaStd-Condensed'}}>Accessories</Text>
                        <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        <Image source={require("../images/shears.png")} style={{height:100, width: 100, alignItems:"center", margin:"8%"}}/>
                    </View>
                </Pressable>

                <View style={{paddingBottom:"10%"}}>
                    <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Soil"})} style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}}>
                        <View style={{width:"50%", backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center"}}>
                            <Image source={require("../images/soil.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                        </View>
                        <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderTopRightRadius:20}}>
                            <Text style={{fontSize:RFPercentage(4.0), fontFamily:'FuturaStd-Condensed'}}>Soil</Text>
                            <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "pH Strips"})} style={{width:"90%", flexDirection: "row", paddingLeft:"5%"}}>
                        <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderBottomLeftRadius:20}}>
                            <Text style={{fontSize:RFPercentage(4.0), fontFamily:'FuturaStd-Condensed'}}>pH Strips</Text>
                            <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        </View>
                        <View style={{width:"50%", backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center"}}>
                            <Image source={require("../images/ph-meter.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                        </View>
                    </Pressable>
                </View>

                <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Nutrients"})} style={{width:"90%", paddingLeft:"5%", paddingTop:"3%", paddingBottom:"10%"}}>
                    <View style={{backgroundColor:"rgb(254, 238, 213)", paddingTop:"7%", alignItems:"center", borderRadius:20}}>
                        <Text style={{fontSize:RFPercentage(4.0), fontFamily:'FuturaStd-Condensed'}}>Nutrients</Text>
                        <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        <Image source={require("../images/bottle.png")} style={{height:100, width: 100, alignItems:"center", margin:"8%"}}/>
                    </View>
                </Pressable>


            </ScrollView>
          
        </View>
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
        backgroundColor: "rgb(191, 203, 194)",
        height: "100%"
    },
  });


export default Shop;
