import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native"; // We have to import each thing we want to use, un like in React JS where we were able to use the HTML btn without importing it or anything.
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// {Core Components} -> View, Text, Image, ScrollView, TextInput, FlatList
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]); // Intial State => [] Empty Array

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText]); // NOT BEST WAY OF UPDATING STATE because new state is dependent on old state.
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]); // BETTER OR RECOMMENDED WAY TO UPDATING STATE, "currentCourseGoals" would be provided by React
    // setModalIsVisible(false); // we can do this also here, this is already done in this fn "endAddGoalHandler()"
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    // id of to be deleted item
    // console.log("Deleted");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); // filter itself takes a fn that have to return true or false, if inner function returns true then Item is kept, otherwise Item is droped if returned value is false.
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* <Button> doesn't support style props, because btn is prestyled, we don't want to style it too much, If we want to style a btn then we have to create a btn using <Pressable> then style it.  */}
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {/* this is not prefered way because Modal component have visible props that we can use */}
      {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
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
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // "keyExtractor" to get a key for each element
          keyExtractor={(item, index) => {
            // it wants a fn as an argument
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
  goalsContainer: {
    flex: 4,
  },
});
