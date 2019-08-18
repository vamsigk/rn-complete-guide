import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback, Alert, Button, ScrollView } from 'react-native';

import Input from '../components/Input';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameScreen = (props) => {

    const [enteredText, setEnteredText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    textInputHandler = (textInput) => {
        setEnteredText(textInput.replace(/[^0-9]/g, ''));
    };

    textResetHandler = () => {
        setEnteredText('');
        setConfirmed(false);
    };

    textConfirmHandler = () => {
        const chosenNumber = parseInt(enteredText);
        if (Number.isNaN(chosenNumber) || (chosenNumber > 99) || (chosenNumber <= 0)) {
            Alert.alert('Invalid number.',
                'Number has to be in between 1 and 99.',
                [{
                    text: 'Okay', style: 'destructive', onPress: textResetHandler
                }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredText('');
        Keyboard.dismiss();
    };

    let cofirmedOutput;

    if (confirmed) {
        cofirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Your selected number</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={props.onStartGame.bind(this, selectedNumber)}>
                    START GAME
                </MainButton>
            </Card>
        );
    }

    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.screenTitle}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        autoCapitalize='none'
                        blurOnSubmit
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={textInputHandler}
                        value={enteredText}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="RESET" color={colors.accent} onPress={textResetHandler} />
                        <Button title="CONFIRM" color={colors.primary} onPress={textConfirmHandler} />
                    </View>
                </Card>
                {cofirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        backgroundColor: "#ffffe6"
    },
    screenTitle: {
        fontSize: 20,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        marginVertical: 10,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    button: {
        //width: 100
        width: Dimensions.get('window').width / 4
    },
    input: {
        textAlign: "center",
        width: 30
    },
    summaryContainer: {
        alignItems: "center",
        marginVertical: 10
    }
});

export default GameScreen;

