import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

// we also get "route" props as we get "navigation" porps because this component("MealsOverviewScreen") is regestered as a Screen with the React Navigation
function MealsOverviewScreen({ navigation, route }) {
  // const route = useRoute(); // define useRoute() Hook like this.
  // route.params // we can access the params like this.

  const catId = route.params.categoryId; // it is a object contains the params that we might have passed to this Screen.

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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
