import { View, Text, StyleSheet } from "react-native"; // "ActivityIndicator" this gives us a platform adaptive loading spinner.

import { GlobalStyles } from "../../constants/style";
import Button from "./Button";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPressProp={onConfirm}>Okay</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },

  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white"
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  //   message: {
  //     fontSize: 14, // this is the default font size on the message, so we don't need any stlying on the message
  //   },
});
