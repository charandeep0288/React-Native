import { useLayoutEffect } from "react"; // we use this hook when we want to run something with the fn of the component rendering itself
import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

// we also get "route" props as we get "navigation" porps because this component("MealsOverviewScreen") is regestered as a Screen with the React Navigation
function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute(); // define useRoute() Hook like this.
  // route.params // we can access the params like this.

  const catId = route.params.categoryId; // "route" is a object contains the params that we might have passed to this Screen.

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // .indexOf() returns "-1" value if that value is there in that array, otherwise it gives the indexOf that element
  });

  useLayoutEffect(() => {
    // "useLayoutEffect" can be used same as "useEffect"
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title; // this could be "null" but we know that we are coming to this Screen through navigation, so we can access this "title" like this.

    // we used "useEffect" for setting option because we were getting a warning, but we are going to use "useLayoutEffect" here because "useEffect" works when the component have been loaded, so it look ugly title changing after the screen or component have been loaded. And Instead "useLayoutEffect" works in parallel to the component fn being executed.
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  
  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
