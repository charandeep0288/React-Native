import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        // we added this "android_ripple" because we want to have some feedback when user click on this component, Android specific, doesn't work on iOS.
        android_ripple={{ color: "#ccc" }}
        // we did this to have some feedback to give back when user click on this component, for iOS, (but we also get this "opacity effect" on "Android" also with this "android_ripple" effect )
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4, // for shadow on Android

    // for shadow on iOS
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  // going to use this property to provide some feedback to the user when user clicks on this component(MealItem), for iOS
  // but we also get this opacity effect on Andoid also with "android_ripple" effect we can avoid this using "Platform" API
  buttonPressed: {
    opacity: 0.5,
  },

  // we created this innerContainer because we want to have borderRadius in iOS also
  // (we have to this and a new <View> with this style i.e, in "innerContainer" and add these properties to have rounded corners in iOS )
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden", // we must have -> overflow: "hidden" to the other <View>(innerContainer) that have shadow properties -> for Shadow to be visible
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
