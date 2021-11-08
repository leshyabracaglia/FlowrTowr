import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, Image, View, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";

import Header from "../Components/Header";


const Shop = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.background}>

            <Header navigation={navigation} title={"Shop"} color="#1B0E14"></Header>

            <ScrollView style={{paddingLeft: "4%", paddingTop: "3%"}}>
                
                <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Seeds"})} style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}}>
                    <View style={{width:"50%", backgroundColor:"#907f87", padding:"10%", alignItems:"center", borderBottomLeftRadius:20}}>
                        <Image source={require("../images/seed.png")} style={{height:80, width: 80, alignItems:"center"}}/>
                    </View>
                    <View style={{width:"50%", backgroundColor:"#ebeaeb", padding:"7%", borderTopRightRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.1), fontFamily:'Domine-Regular', color: "#0B4D2C"}}>Seeds</Text>
                        <Text style={{paddingTop:"2%", color: "#0B4D2C"}}>1 product - Coming Soon!</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Accessories"})} style={{width:"90%", paddingLeft:"5%", paddingTop:"10%"}}>
                    <View style={{backgroundColor:"#c7c2c4", paddingTop:"7%", alignItems:"center", borderRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.1), fontFamily:'Domine-Regular', color: "#0B4D2C"}}>Accessories</Text>
                        <Text style={{paddingTop:"2%", color: "#0B4D2C"}}>1 product - Coming Soon!</Text>
                        <Image source={require("../images/shears.png")} style={{height:100, width: 100, alignItems:"center", margin:"8%"}}/>
                    </View>
                </Pressable>

                <View style={{paddingBottom:"10%"}}>
                    <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Soil"})} style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}}>
                        <View style={{width:"50%", backgroundColor:"#907f87", padding:"7%", alignItems:"center"}}>
                            <Image source={require("../images/soil.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                        </View>
                        <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderTopRightRadius:20}}>
                            <Text style={{fontSize:RFPercentage(3.1), fontFamily:'Domine-Regular', color: "#0B4D2C"}}>Soil</Text>
                            <Text style={{paddingTop:"2%", color: "#0B4D2C"}}>1 product - Coming Soon!</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "pH Strips"})} style={{width:"90%", flexDirection: "row", paddingLeft:"5%"}}>
                        <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderBottomLeftRadius:20}}>
                            <Text style={{fontSize:RFPercentage(3.1), fontFamily:'Domine-Regular', color: "#0B4D2C"}}>pH Strips</Text>
                            <Text style={{paddingTop:"2%", color: "#0B4D2C"}}>0 products - Coming Soon!</Text>
                        </View>
                        <View style={{width:"50%", backgroundColor:"#907f87", padding:"7%", alignItems:"center"}}>
                            <Image source={require("../images/ph-meter.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                        </View>
                    </Pressable>
                </View>

                <Pressable onPress={() => navigation.navigate("ShopCategory", {category: "Nutrients"})} style={{width:"90%", paddingLeft:"5%", paddingTop:"3%", paddingBottom:"10%"}}>
                    <View style={{backgroundColor:"#c7c2c4", paddingTop:"7%", alignItems:"center", borderRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.1), fontFamily:'Domine-Regular', color: "#0B4D2C"}}>Nutrients</Text>
                        <Text style={{paddingTop:"2%", color: "#0B4D2C"}}>0 products - Coming Soon!</Text>
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
        backgroundColor: "#4c3340",
        height: "100%"
    },
  });


export default Shop;
