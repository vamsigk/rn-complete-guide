import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import Colors from '../constants/colors';


const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        height: 90,
        backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.accent,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    headerText: {
        color: "black",
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;