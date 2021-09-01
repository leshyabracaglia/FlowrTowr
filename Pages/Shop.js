import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import Header from "../Components/Header";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
} from 'react-native';


const Shop = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.background}>

            <Header navigation={navigation} title={"Shop"}></Header>

            <ScrollView style={{paddingLeft: "4%", paddingTop: "3%"}}>
                
                <View style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}}>
                    <View style={{width:"50%", backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center", borderBottomLeftRadius:20}}>
                        <Image source={require("../images/plant.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                    </View>
                    <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderTopRightRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.5)}}>Flowering Plants</Text>
                        <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                    </View>
                </View>

                <View style={{width:"90%", paddingLeft:"5%", paddingTop:"10%"}}>
                    <View style={{backgroundColor:"rgb(254, 238, 213)", paddingTop:"7%", alignItems:"center", borderRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.9)}}>Trailing</Text>
                        <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        <Image source={require("../images/trailing.png")} style={{height:100, width: 100, alignItems:"center", margin:"8%"}}/>
                    </View>
                </View>

                <View style={{paddingBottom:"10%"}}>
                    <View style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}}>
                        <View style={{width:"50%", backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center"}}>
                            <Image source={require("../images/palm.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                        </View>
                        <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderTopRightRadius:20}}>
                            <Text style={{fontSize:RFPercentage(3.9)}}>Indoor Palms</Text>
                            <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        </View>
                    </View>
                    <View style={{width:"90%", flexDirection: "row", paddingLeft:"5%"}}>
                        <View style={{width:"50%", backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderBottomLeftRadius:20}}>
                            <Text style={{fontSize:RFPercentage(3.1)}}>Succulents</Text>
                            <Text style={{paddingTop:"2%"}}>0 products - Coming Soon!</Text>
                        </View>
                        <View style={{width:"50%", backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center"}}>
                            <Image source={require("../images/succulent.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                        </View>
                    </View>
                </View>


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
