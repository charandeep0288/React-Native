import { View, FlatList, Text } from "react-native";

import SaleSubCategoryItem from "./SaleSubCategoryItem";

function SaleSubCategoryList({ selectedSubCategoriesProp }) {
  function renderSaleSubCategoryItem(itemData) {
    const item = itemData.item;
    const isLastItem = selectedSubCategoriesProp.length - 1 === itemData.index;

    const salesSubCategoryProps = {
      code: item.id,
      name: item.name,
      altText: item.altText,
      imageUrl: item.appicon.url,
      isLastItem: isLastItem,
    };

    return <SaleSubCategoryItem {...salesSubCategoryProps} />;
  }

  return (
    <View>
      <FlatList
        data={selectedSubCategoriesProp}
        keyExtractor={(item) => item.id}
        renderItem={renderSaleSubCategoryItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default SaleSubCategoryList;
