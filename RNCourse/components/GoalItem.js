// import React from "react"; // no need to do this now, because functional component can be created easily.
import { StyleSheet, View, Text, Pressable } from "react-native";

// Touchable(all realted to this, these are old not), Pressable(Touchable and all related to this are replaced by Pressable) are components through which we tell react-native that this component is pressable.
function GoalItem(props) {
  return (
    // .bind() is a standard JS fn which allows us to preconfigure a fn for future execution. First argument is "this" keyword in this bind() fn, 2nd argument would be first parameter recivied by to be called fn(in this case props.id that we want to remove )
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210635" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // for iOS we have to do this to add a effect onPress of Item when we want to remove it.
        // "style" can also take fn, this fn would be called automatically by <Pressable> whenever the Press state changes
        // style={(pressedData) => pressedData.pressed}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5
  },
  
  goalText: {
    padding: 8,
    color: "white",
  },
});
export default GoalItem;
