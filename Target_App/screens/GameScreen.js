import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const intialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  // console.log(userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong....", [
        { text: "Sorry", style: "cancel"},
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess; // currentGuess - 1
    } else {
      minBoundary = currentGuess + 1;
    }
    // console.log(minBoundary, maxBoundary); // we were getting into the infinite loop.
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS  */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower ?</Text>
        <View>
          {/* - */}
          <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          {/* +  */}
          <PrimaryButton onPressProp={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
