import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native"; // We have to import each thing we want to use, un like in React JS where we were able to use the HTML btn without importing it or anything.
import GoalItem from "./components/GoalItem";

// {Core Components} -> View, Text, Image, ScrollView, TextInput, FlatList
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(""); // Intial State => "" Empty String
  const [courseGoals, setCourseGoals] = useState([]); // Intial State => [] Empty Array

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText]); // NOT BEST WAY OF UPDATING STATE because new state is dependent on old state.
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]); // BETTER OR RECOMMENDED WAY TO UPDATING STATE, "currentCourseGoals" would be provided by React
  }

  return (
    <View style={styles.appContainer}>
      {/* 1st View have input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/* 2nd View is used to view the list of goals that we have entered*/}
      <View style={styles.goalsContainer}>
        {/* <ScrollView> is Component that renders all its components(for eg: 10,000 components) at the starting of loading app, that can lead to performance issue, So, we can use <FlatList> component, it also supports "alwaysBounceVertical" */}
        <FlatList
          // key property is automatically be applied to the <FlatList> component
          data={courseGoals}
          // "renderItem" is responsible to render JSX code
          renderItem={(itemData) => {
            // item is an object, that also contain metadata
            return (
              <GoalItem />
            );
          }}
          // "keyExtractor" to get a key for each element
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

// It is prefered to use this "StyleSheet" to seperate JSX and styling code. And make CSS reuseable.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 4,
  },
});
