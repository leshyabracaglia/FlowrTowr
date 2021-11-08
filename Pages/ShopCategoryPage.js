import React, { useState, useEffect } from 'react';

import { RFPercentage } from "react-native-responsive-fontsize";
import firestore from '@react-native-firebase/firestore';

import Header from "../Components/Header";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
} from 'react-native';


const ShopCategoryPage = ({ navigation, route }) => {

    const [category, ] = useState(route.params.category);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        firestore().collection('shop')
        .get()
        .then(querySnapshot => {
            console.log('Total posts: ', querySnapshot.size);
            let productHolder = []
            querySnapshot.forEach(documentSnapshot => {
                let data = documentSnapshot.data();
                if(data.category === category){
                    productHolder.push(documentSnapshot.data());
                }
            });
            return productHolder
        })
        .catch((error) => {
            console.log(error);
        }).then((productHolder) => {
            console.log(productHolder);
            setProducts(productHolder);
        })
    }, [])

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.background}>
                <Header navigation={navigation} title={"Shop " + category }></Header>
                <ScrollView style={{paddingLeft: "4%", paddingTop: "3%"}}>

                {
                    products.map((product) => {

                        return(
                        <View style={{width:"90%", flexDirection: "row", paddingLeft:"5%", paddingTop:"10%"}} key={product.itemName}>
                            <View style={{width:"40%", backgroundColor:"rgb(239, 239, 239)", padding:"7%", alignItems:"center"}}>
                                <Image source={require("../images/seed.png")} style={{height:100, width: 100, alignItems:"center"}}/>
                            </View>
                            <View style={{width:"60%", backgroundColor:"rgb(245, 245, 245)", padding:"7%"}}>
                                <Text style={{fontSize:RFPercentage(3.5), fontFamily:'FuturaStd-Condensed'}}>{product.itemName}</Text>
                                <Text style={{paddingTop:"2%", fontSize:RFPercentage(2.5)}}>${product.price}</Text>
                                <Text style={{paddingTop:"2%", fontSize:RFPercentage(2.0)}}>{product.description}</Text>
                            </View>
                        </View>
                        )

                    })
                }
                
                

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


export default ShopCategoryPage;
