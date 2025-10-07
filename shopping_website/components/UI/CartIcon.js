import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import GlobalStyles from "../../constants/style";
import IconButton from "./IconButton";
import { ProductsContext } from "../../store/products-context";

function CartIcon() {
  const productCtx = useContext(ProductsContext);

  const cartItemsCount = productCtx.cart.length;

  return (
    <View style={styles.cartIconContainer}>
      <View>
        <IconButton icon="cart-outline" size={34} onstyleAdd={styles.cart} />
      </View>
      <View style={styles.cartCountContainer}>
        <Text style={styles.cartCount}>{cartItemsCount}</Text>
      </View>
    </View>
  );
}

export default CartIcon;

const styles = StyleSheet.create({
  cartIconContainer: {
    flexDirection: "row",
  },

  cart: {
    right: 6,
  },

  cartCountContainer: {
    top: -3,
    right: 18,
    backgroundColor: GlobalStyles.colors.pink30,
    height: 17,
    width: 17,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  cartCount: {
    color: GlobalStyles.colors.white,
    fontSize: 10,
    fontWeight: "bold",
  }
});
