import { StyleSheet, Text, View, Button } from "react-native"; // We have to import each thing we want to use, un like in React JS where we were able to use the HTML btn without importing it or anything.

// {Core Components} -> View, Text, Image, ScrollView, TextInput
export default function App() {
  return (
    // <View> eqivaltent to <div>, <scction>, <article> in HTML, <View> is used to hold other things(components) not text, <View> is also used to structure or layout other components.
    <View style={styles.container}>
      <View>
        <Text
          // style={{
          //   margin: 16,
          //   borderWidth: 2,
          //   borderColor: "red",
          //   padding: 16,
          // }}
          style={styles.dummyText}
        >
          Another piece of text!
        </Text>
      </View>
      {/* {Inline styling} using style attribute */}
      <Text
        style={styles.dummyText}
        // style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 16 }}
      >
        Hello World
      </Text>
      {/* this is self closing tag  <Button> */}
      <Button title="tap me!" />
    </View>
  );
}


// const styles2 = {}; //  we could have created a new styled component like this and set styles here.
// but "StyleSheet" have a advantage of checking for valid style properties or values, and also give us auto-completion functionality.

// It is prefered to use this "StyleSheet" to seperate JSX and styling code. And make CSS reuseable.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    // value should be object with CSS we want it to hold on.
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
});
