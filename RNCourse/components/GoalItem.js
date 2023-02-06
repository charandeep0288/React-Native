// import React from "react"; // no need to do this now, because functional component can be created easily.
import { StyleSheet, View, Text, Pressable } from "react-native";

// Touchable(all realted to this, these are old not), Pressable(Touchable and all related to this are replaced by Pressable) are components through which we tell react-native that this component is pressable.
function GoalItem(props) {

  return (
    // .bind() is a standard JS fn which allows us to preconfigure a fn for future execution. First argument is "this" keyword in this bind() fn, 2nd argument would be first parameter recivied by to be called fn(in this case props.id that we want to remove )
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
  },
});
export default GoalItem;
