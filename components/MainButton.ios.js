import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import Colors from '../constants/colors';

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.buttonContainer, ...props.style}}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.accent,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 'open-sans-light',
        fontSize: 18
    }
})

export default MainButton;