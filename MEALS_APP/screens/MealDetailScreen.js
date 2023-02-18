import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>This is the Meal Details Screen {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
