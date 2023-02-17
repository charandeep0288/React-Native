import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategorieGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategorieGridTile
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    // FlatList Render items lazly(some items are rendered instead of rendering all the items to improve performance)
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
