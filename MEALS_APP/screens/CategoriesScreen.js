import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategorieGridTile from "../components/CategoryGridTile";

// "navigation" prop is provided by the <Stack.Screen> component only to the screen we have specified, not to its nested or child component(we can pass this "navigation" to its child component using props or a hook i.s, useNavigation hook provided by "@react-navigation/native").
function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      // navigation.navigate("ScreenName", { object to send data });
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id // sending the "categoryId" to the "MealsOverview" Screen, & to extract this value in "MealOverview" Screen we use "route" params -> "route.pramas" OR we can use useRoute() Hook to extract this value.
      }); // we give the name of the component we want to render to this navigate() fn, also we can "send data" btw screens using this fn only
    }

    return (
      <CategorieGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressProp={pressHandler}
      />
    );
  }

  return (
    // FlatList Render items lazly(some items are rendered instead of rendering all the items to improve performance)
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      // to render 2 items next to each other we use this "numColumns"
      numColumns={2} 
    />
  );
}

export default CategoriesScreen;
