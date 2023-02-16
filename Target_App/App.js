import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font"; // we can use useFonts hook
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(); // Inital value is "null" or "undefined"
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0); // Inital value is "0" because we have not started game yet

  // fontLoaded -> first argument is a boolean value
  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  }); // we specify fonts we want to use in this object of "useFonts" hook

  if (!fontLoaded) {
    //  we checking its value if false then we get a loading screen (but deprecated now)
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    // these 2 state update would be batched together by React and reload the component only once not twice
    setUserNumber(pickedNumber);
    setGameIsOver(false); // we want to state that game has started, instead of Game is Over.
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameScreen() {
    setUserNumber(null); // by setting "userNumber" to "null" we make sure that these 2 if conditions to render GameScreen OR GameOverScreen don't get resolved to "true".
    // setGameIsOver(true); // we have done this in the above fn that's why we don't have to do this here.
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameScreen}
      />
    );
  }

  return (
    // By default -> <View> take as much space as they need to fit their content inside themself's.
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // by adding flex: 1 here, this container would take as much space as available
    // backgroundColor: "#ddb52f", // next we would move to gradient, then picture + gradient
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
