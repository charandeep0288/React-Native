import { View, Text, StyleSheet } from "react-native";
// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import { FavoritiesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritiesScreen() {
  // const favoriteMealsCtx = useContext(FavoritiesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); // to get the state from the store for "redux-toolkit"

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // ); // here we get the meals which have been selected favorite by the user

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  ); // here we get the meals which have been selected favorite by the user

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritiesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
