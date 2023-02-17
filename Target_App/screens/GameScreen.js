import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // we can use Icons in app using this

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";

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

function GameScreen({ userNumber, onGameOver }) {
  const intialGuess = generateRandomBetween(1, 100, userNumber); //  we were getting into the infinite loop that's why we hard coded this "minBoundary" & "maxBoundary" values OR we could have used useMemo hook of React.
  // console.log(userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [guessRounds, setGuessRounds] = useState([intialGuess]); // store all the rounds that system guess in an array.

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]); // we want this useEffect() to work in the cases [currentGuess, userNumber, onGameOver], if any change happen in any of these values or fn.

  useEffect(() => {
    // Could have also set the values in the above "useEffect()" where we have "onGameOver" fn because we know that game is over.
    minBoundary = 1;
    maxBoundary = 100;
  }, []); // this useEffect() would work only when we have rendered this component for the first time each time, not for the case where any state changes and this component re-renders

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong....", [
        { text: "Sorry", style: "cancel" },
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
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS  */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          {/* - */}
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressProp={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          {/* +  */}
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressProp={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* LOG ROUNDS */}
        {/* It also would have been ok to traverse over the list like this because we know that we are not going to go over 10 or 12 list items */}
        {/* {guessRounds.map((guessRound) => (
          <Text
            // We can use the "guessRound" as a key because how logic we have written i.e, we can't guess the same number twice
            key={guessRound}
          >
            {guessRound}
          </Text>
        ))} */}
        <FlatList
          // key property is automatically be applied to the <FlatList> component
          // data prop that points to the array that holds the data should be output
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundListLength - itemData.index}
                guess={itemData.item}
              >
                {itemData.item}
              </GuessLogItem>
            );
          }}
          // "keyExtractor" will look for key in the "data" object, but it won't find that because that data is not a key. Hence tell <FlatList> how drive the key using "keyExtractor"
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    
  },

  instructionText: {
    marginBottom: 12,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    padding: 16,
  }
});
