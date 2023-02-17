import { Text, StyleSheet, Platform } from "react-native"; // "Platform" API tell us on which platform we are running the App

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold", //  we can remove this fontWeight: "bold" because fontFamily: "Open-sans-bold" will make text bold
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 2, // we can do this because of the file name we have speified(Title.android.js), React Native will know which file to pick based on the platform.
    borderColor: "white",
    padding: 12,
    maxWidth: "95%", // to create more responsive app, & this "95%" is of the parent container.
    width: 300,
  },
});
