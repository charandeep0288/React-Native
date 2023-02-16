import { View, Image, StyleSheet, Text } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      {/* A <Text> component can have another <Text> component but <Text> component cannot a <View> component */}
      {/* <Text> component in a <Text> component, inner or nested <Text> component recieve the styles we have defined in the outer <Text> component */}
      {/*And when we have <Text> component in a <View> component, inner <Text> component doesn't recieve the styles we have defined in the outer <View> component */}
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number
        <Text style={styles.highlight}>Y</Text>.
      </Text>
      <View>
        <PrimaryButton>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150, // width & height must be same, "borderRadius" should be half of width & height, using this we can create a circle
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden", // to hide the overflow nature of the actual image
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
