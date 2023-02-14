import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({userNumber}) {
  const intialGuess = generateRandomBetween(1, 101, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS  */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower ?</Text>
        {/* +  */}
        {/* - */}
      </View>
      <View>
        {/* LOG ROUNDS */}

      </View>
    </View>
  );
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
});