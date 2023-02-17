import { Text, StyleSheet, useWindowDimensions } from "react-native";

function Title({ children }) {
  const { width, height } = useWindowDimensions();
  
  const paddingDistance = height < 365 ? 1 : 1;
  const textFontSize = height < 365 ? 18 : 22;

  return <Text style={[styles.title, {fontSize: textFontSize}]}>{children}</Text>;
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
    width: 300,
  },
});
