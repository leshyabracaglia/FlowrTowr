import React from 'react';
import Header from "../Components/Header";
import { RFPercentage } from "react-native-responsive-fontsize";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


const News = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.background}>

            <Header navigation={navigation} title={"Blog"}></Header>

            <View style={{width:"95%", paddingLeft:"5%", paddingTop:"5%"}}>
                    <View style={{backgroundColor:"#c87ea3", padding:"5%", alignItems:"center", borderTopRightRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.3), fontFamily: 'PTSerif-Regular'}}>Blog Coming Soon...</Text>
                    </View>
                    <View style={{backgroundColor:"#fcf8fa", padding:"6%", backgroundColor: "#EACEDC", borderBottomLeftRadius:20}}>
                        <Text style={{fontSize:RFPercentage(2.6), fontFamily: "PTSerif-Regular"}}>What do you want to hear about?</Text>
                    </View>
                </View><View style={{paddingLeft: "4%", paddingTop: "3%"}}>
            </View>
          
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
        backgroundColor: "#062d19",
        height: "100%"
    },
  });


export default News;
