import { View, Text, StyleSheet } from "react-native";

import GlobalStyles from "../constants/style";
import Address from "../components/AllProducts/Address";
import ProductList from "../components/AllProducts/ProductsList";

import { PRODUCTS } from "../data/Products-data";

function AllProducts() {
  return (
    <View style={styles.AllProductsContainer}>
      <Address />
      <View style={styles.productsCount}>
        <Text style={styles.productsCountText}>
          {PRODUCTS.length} items
        </Text>
      </View>
      <ProductList products={PRODUCTS} />
    </View>
  );
}

export default AllProducts;

const styles = StyleSheet.create({
  AllProductsContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.white,
  },
  productsCount: {
    marginHorizontal: 10,
    marginVertical: 4,
  },
  productsCountText: {
    fontSize: 12.5,
  },
});
