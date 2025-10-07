import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

import GlobalStyles from "../../../constants/style";
import ProductList from "../Products/ProductsList";

function AllProducts({ products }) {
  return (
    <View style={styles.allProductsContainer}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.headingText}>Now trending </Text>
        </View>
        <View style={styles.validTillTextContainer}>
          <Ionicons
            name="time-outline"
            size={14}
            color={GlobalStyles.colors.pink10}
          />
          <Text style={[styles.headingText, styles.validTillText]}>
            Valid till 30 April
          </Text>
        </View>
        <View style={styles.viewAllContainer}>
          <Text style={[styles.headingText, styles.viewAllText]}>View all</Text>
        </View>
      </View>

      <ProductList products={products} />
    </View>
  );
}

export default AllProducts;

const styles = StyleSheet.create({
  allProductsContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.lighGrey40,
  },

  headingContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: "row",
  },

  headingText: {
    fontWeight: "bold",
    fontSize: 12,
  },

  validTillText: {
    color: GlobalStyles.colors.pink10,
  },

  validTillTextContainer: {
    flexDirection: "row",
    paddingHorizontal: 4,
  },

  viewAllContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  viewAllText: {
    textDecorationLine: "underline",
  },
});
