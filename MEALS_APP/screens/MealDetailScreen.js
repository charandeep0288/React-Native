import { View, Text, Image } from "react-native";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data"; // we can get that meal data using the meal id we get in the "route"

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      {/* for now, we are not able to see the Image because we must specify the width & height of the Image otherwise Image would not be visible */}
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <Text>Ingredients</Text>
      {/* we are just looping over the ingredients instead of using <Flatlist>, because we can have max ingredients upto 10 or 12, so it doesn't matter if we use <FlatList> */}
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
