import { View, Text, FlatList, StyleSheet } from "react-native";

import ProductItem from "./ProductItem";

function ProductList({ products }) {

  function renderProductItem(itemData) {
    const item = itemData.item;

    const ProductItemProps = {
      code: item.code,
      name: item.name,
      stock: item.stock,
      price: item.price,
      mrp: item.mrp ? item.mrp : {},
      margin: item.margin ? item.margin : {},
      isProductAddedToWishlist: item.isProductAddedToWishlist,
      image: item.image.url,
      categoryL1: item.categoryL1,
      categoryL2: item.categoryL2,
      categoryL3: item.categoryL3,
      brand: item.brand,
    };
    
    return <ProductItem {...ProductItemProps} />;
  }

  return (
    <View style={styles.productList}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.code}
        renderItem={renderProductItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default ProductList;

const styles = StyleSheet.create({
  productList: {
    paddingHorizontal: 8,
  }
});
