import { FlatList, View } from "react-native";

import SaleCategoryItem from "./SaleCategoryItem";

function SaleCategoryList({
  saleCategories,
  getSelectedSaleCategoryCode,
  selectedCodeProp,
}) {
  function getSelectedSaleCategory(code) {
    console.log(code);
    getSelectedSaleCategoryCode(code);
  }
  function renderSaleCategoryItem(itemData) {
    const item = itemData.item;

    const saleCategoryProps = {
      code: item.code,
      name: item.name,
      altText: item.altText,
      imageUrl: item.imageUrl,
    };

    return (
      <SaleCategoryItem
        {...saleCategoryProps}
        selectedSaleCategory={getSelectedSaleCategory}
        selectedCode={selectedCodeProp}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={saleCategories}
        keyExtractor={(item) => item.code}
        renderItem={renderSaleCategoryItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default SaleCategoryList;
