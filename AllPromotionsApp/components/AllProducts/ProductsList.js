import { View, Text, FlatList, StyleSheet } from "react-native";

import ProductItem from "./ProductItem";

function ProductList({ products }) {

  function renderProductItem(itemData) {
    const item = itemData.item;

    const ProductItemProps = {
      code: item.code,
      name: item.name,
      url: item.url,
      description: item.description,
      stock: item.stock,
      price: item.price,
      images: item.images,
      potentialPromotions: item.potentialPromotions,
      tags: item.tags,
      mrp: item.mrp,
      margin: item.margin,
      marginPercent: item.marginPercent,
      isProductAddedToWishlist: item.isProductAddedToWishlist,
      image: item.image,
      isProductNotified: item.isProductNotified,
      isStoreOnly: item.isStoreOnly,
      isReturnable: item.isReturnable,
      promotionsCount: item.promotionsCount,
      categoryL1: item.categoryL1,
      categoryL2: item.categoryL2,
      categoryL3: item.categoryL3,
      brand: item.brand,
      giveAway: item.giveAway,
      unitCode: item.unitCode,
      variantValue: item.variantValue
    };
    
    return <ProductItem {...ProductItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.code}
        renderItem={renderProductItem}
        numColumns={2}
      />
    </View>
  );
}

export default ProductList;

const styles = StyleSheet.create({

});
