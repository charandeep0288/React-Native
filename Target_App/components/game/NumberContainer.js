import { View, Text, StyleSheet, Dimensions } from "react-native"; // "Dimensions" is an API build into react-native

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width; // we can give 2 values here -> "screen" or "window", For Android "screen" is width and height of screen + StatusBar & "window" is excluding the StatusBar,but for iOS there no difference btw screen or window, 

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8, // "borderRadius" not supported on <Text> element
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 24 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold", 
  },
});
