import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/colors';
import colors from '../constants/colors';

const numberContainer = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent,
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        width: 30
    },
    number: {
        fontSize: 20,
        color: Colors.accent
    }
});

export default numberContainer;