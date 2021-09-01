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

            <Header navigation={navigation} title={"News"}></Header>

            <View style={{width:"90%", paddingLeft:"10%", paddingTop:"10%"}}>
                    <View style={{backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center", borderTopRightRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3.8), fontFamily: 'Bodoni 72 Oldstyle'}}>News Coming Soon...</Text>
                    </View>
                    <View style={{backgroundColor:"rgb(245, 245, 245)", padding:"7%", borderBottomLeftRadius:20}}>
                        <Text style={{fontSize:RFPercentage(3)}}>What do you want to hear about?</Text>
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
        backgroundColor: "rgb(191, 203, 194)",
        height: "100%"
    },
  });


export default News;
