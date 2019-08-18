import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Image style={styles.imageGameOver} source={require('../assets/images/game-over.png')} />
            <Text style={styles.textStyle}>Number Entered by USER : <Text style={styles.textStyleNested}>{props.userNumber}</Text>
            </Text>
            <Text style={styles.textStyle}>Number of Rounds App Took to finish the Game: <Text style={styles.textStyleNested}>{props.numRounds}</Text></Text>
            <MainButton style={styles.startNewGameButton} onPress={props.onConfigureNewGame}>
                Start New Game
            </MainButton>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20
    },
    textStyle: {
        fontFamily: 'open-sans-light'
    },
    textStyleNested: {
        fontFamily: 'open-sans-bold'
    },
    imageGameOver: {
        height: 160,
        width: 160,
        marginVertical: 10
    },
    startNewGameButton: {
        marginVertical: 20
    }
})

export default GameOverScreen;