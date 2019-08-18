import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';


import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const genereateRandNumberBetween = (min, max, exclude) => {
    randomNumberBN = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumberBN === exclude) {
        return genereateRandNumberBetween(min, max, randomNumberBN);
    } else {
        return randomNumberBN;
    }
};
    

const GameScreen = (props) => {
    
    const intialGuess = genereateRandNumberBetween(0, 100, props.userChoice);
    const[currentGuess, setCurrentGuess] = useState(intialGuess);
    const[pastGuesses, setpastGuesses] = useState([intialGuess]);
    const currentHigh  = useRef(100);
    const currentLow = useRef(1);
    
    const { userChoice, onGameOver } = props;
    
    useEffect(() => {
        if(currentGuess === props.userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, onGameOver, userChoice]);

    directionHandler = (direction) => {

        if((direction === 'lower' &&  currentGuess < props.userChoice) ||
        (direction === 'greater' &&  currentGuess > props.userChoice)) {
            Alert.alert('It\'s a lie', 
            'Press the correct Direction',
            [
                {text: 'Cancel', style: 'cancel'}
            ]
            );
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        
        const guessToDisplay = genereateRandNumberBetween(currentLow.current, currentHigh.current, currentGuess);

        setCurrentGuess(guessToDisplay);
        //setRounds(currRounds => currRounds + 1);
        setpastGuesses(guesses => [guessToDisplay, ...guesses]);
    };

    const renderListItem = (guess, index) => (<View style={styles.listItem} key={Math.random()}><Text>Computer's Number {index} guess is {guess}.</Text></View>);

    return(
        <View style={styles.gameScreen}>
        <Card style={styles.gameContainer}>
            <Text>Computer's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <MainButton onPress={directionHandler.bind(this, 'lower')}>
                    <Ionicons name="ios-remove" size={25}/>
                </MainButton>
                <MainButton onPress={directionHandler.bind(this, 'greater')}>
                    <Ionicons name="ios-add" size={25}/>
                </MainButton>
            </View>
        </Card>
        <ScrollView>
            {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length-index))}
        </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    gameScreen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        backgroundColor: "#ffffe6"
    },
    gameContainer: {
        marginVertical: 10,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%"
    },
    listItem: {
        borderRadius: 20,
        borderColor: Colors.accent,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        width: "100%"
    }
});

export default GameScreen;