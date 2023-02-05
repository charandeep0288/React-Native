import { StyleSheet, Text, View, Button, TextInput } from "react-native"; // We have to import each thing we want to use, un like in React JS where we were able to use the HTML btn without importing it or anything.

// {Core Components} -> View, Text, Image, ScrollView, TextInput
export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* 1st View have input area */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title="Add Goal" />
      </View>
      {/* 2nd View is used to view the list of goals that we have entered*/}
      <View>
        <Text>List of Goals......</Text>
      </View>
    </View>
  );
}

// It is prefered to use this "StyleSheet" to seperate JSX and styling code. And make CSS reuseable.
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
