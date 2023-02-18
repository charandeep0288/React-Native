import { View, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

// we also get "route" props as we get "navigation" porps because this component("MealsOverviewScreen") is regestered as a Screen with the React Navigation
function MealsOverviewScreen({ navigation, route }) {
  // const route = useRoute(); // define useRoute() Hook like this.
  // route.params // we can access the params like this.

  const catId = route.params.categoryId; // "route" is a object contains the params that we might have passed to this Screen.

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // .indexOf() returns "-1" value if that value is there in that array, otherwise it gives the indexOf that element
  });

  function renderMealItem(itemData) {
    const item = itemData.item; // helper constant

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
