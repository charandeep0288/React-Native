import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/colors";

function PrimaryButton({ children, onPressProp }) {
  function pressHandler() {
    // console.log("Pressed!");
    // onPress();
  }

  return (
    // onPress takes a function that is called when pressed on this component
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => // pressed is boolean
          pressed
            ? [styles.buttonInnerContainer, styles.pressed] // sending array of styles  
            : styles.buttonInnerContainer
        } // (did styling like this because We wanted Ripple effect on iOS).
        onPress={onPressProp}
        android_ripple={{ color: Colors.primary600 }} // only on android
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // to add box shadow in android only
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
