import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    // By default -> <View> take as much space as they need to fit their content inside themself's.
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
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
  }
});
