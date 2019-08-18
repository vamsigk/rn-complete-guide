import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.textInput, ...props.style}}/>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: "100%",
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});

export default Input;
