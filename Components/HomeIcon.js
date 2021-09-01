


import React from 'react';

import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

const HomeIcon = ({children, title}) => {
    return (
    <Pressable style={
        ({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? 'rgb(13, 59, 102)'
                        : 'rgb(122, 145, 141)'
                },
                styles.iconStyle
        ]}>
            <Text style={styles.textStyle}>{title}</Text>
            {children}
    </Pressable>
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        width:"42%", 
        marginTop:"5%",
        marginLeft:"4%",
        marginRight:"2%", 
        height:"95%",
        borderTopLeftRadius:20, 
        borderTopRightRadius:20, 
        borderBottomLeftRadius:20, 
        borderBottomRightRadius:20, 
        padding:"5%", 
        display:"flex",
        shadowColor: "black"
    },
    textStyle: {
        textAlign: "center", 
        marginBottom:"20%",
        color: "rgb(13, 59, 102)",
        fontWeight:"bold"
    }
  });

export default HomeIcon;