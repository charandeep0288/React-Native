import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        {/* A <Text> component can have another <Text> component but <Text> component cannot a <View> component */}
        {/* <Text> component in a <Text> component, inner or nested <Text> component recieve the styles we have defined in the outer <Text> component */}
        {/*And when we have <Text> component in a <View> component, inner <Text> component doesn't recieve the styles we have defined in the outer <View> component */}
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>.
        </Text>
        <View>
          <PrimaryButton onPressProp={onStartNewGame}>
            Start New Game
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width; // we could have also used "height" instead of "width" here.

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150, // width & height must be same, "borderRadius" should be half of width & height, using this we can create a circle
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
