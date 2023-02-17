import { Text, StyleSheet } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "95%", // to create more responsive app, & this "95%" is of the parent container.
    width: 300
  },
});
