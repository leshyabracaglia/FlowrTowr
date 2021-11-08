import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, View, Pressable } from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";


const PasswordField = ({ setPassword }) => {

    let vis_on = require('../../images/visibility.png')
    let vis_off = require("../../images/visibility_off.png")

    const [isHidden, setIsHidden] = useState(true);
    const [eyeImage, setEyeImage] = useState(vis_off);

    function onViewPassword(){
        if(isHidden){
            setIsHidden(false);
            setEyeImage(vis_on);
        }else{
            setIsHidden(true);
            setEyeImage(vis_off);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Password" 
                placeholderTextColor="#EACEDC" 
                style={styles.textInput} 
                onChangeText={setPassword} 
                secureTextEntry={isHidden}
                autoCompleteType="password"
                textContentType="password"
            />
            
            <Pressable style={styles.eyeIcon} onPress={() => onViewPassword()}>
                <Image 
                    source={eyeImage}
                    style={{width: 30, height: 30, paddingBottom:"2%" }}
                ></Image>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        color: "#EACEDC",
        height: 50,
        fontSize: RFPercentage(3.3),
        paddingLeft: "1%",
        paddingTop: "1.5%",
        fontFamily: 'PTSerif-Italic',
        display:"flex",
        width: "85%",
    },
    eyeIcon: {
        width:60,
        marginTop:"4%"
    },
    container: {
        borderBottomColor: "#EACEDC",
        borderBottomWidth: 2.0,
        height: 50,
        flexDirection: "row"
    }
});

export default PasswordField;