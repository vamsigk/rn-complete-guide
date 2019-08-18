import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Header from './components/Header';
import StartGame from './screens/StartGameScreen';
import MainGame from './screens/MainGameScreen';
import GameOver from './screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};



export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)}
            />
  }


  startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setNumberOfRounds(0);
  }

  onGameOverHandler = (rounds) => {
    setNumberOfRounds(rounds);
  }

  configureNewGameHandler = () => {
    setNumberOfRounds(0);
    setUserNumber(null);
  }

  let content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && numberOfRounds <= 0) {
    content = <MainGame userChoice={userNumber} onGameOver={onGameOverHandler} />;
  } else if (numberOfRounds > 0) {
    content = <GameOver numRounds={numberOfRounds}
      userNumber={userNumber}
      onConfigureNewGame={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
