import { useEffect, useState } from "react";
import { useContext } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import GlobalStyles from "../../../constants/style";
import { ProductsContext } from "../../../store/products-context";
import Loader from "../../UI/Loader";
import AddToCartButton from "../../UI/AddToCartButton";
import AddAndRevomeButton from "../../UI/AddAndRevomeButton";

function ProductButton({ code, stock }) {
  const productCtx = useContext(ProductsContext);

  const [isItemPresentInCart, setItemPresentInCart] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const cart = productCtx.cart;

  const currentProduct = cart.filter(
    (currentProduct) => currentProduct.code === code
  )[0];

  function addProductToCart() {
    setIsUpdatingProduct(true);
    if (cart[0].code == code && currentProduct.productCountAvailable < 1) {
      Alert.alert("Error", "Sorry, there is insufficient stock for your cart");
      setIsUpdatingProduct(false);
      return;
    }

    productCtx.addProduct({
      code: code,
      productCountAvailable: stock.stockLevel - 1,
    });

    const quantity = productCtx.isPresentProduct(code);
    setProductQuantity(quantity);
    setItemPresentInCart(productCtx.isPresentProduct(code) > 0 ? true : false);
  }

  function addProductToCart0() {
    setIsUpdatingProduct(true);
    if (cart.productCountAvailable < 1) {
      Alert.alert("Error", "Sorry, there is insufficient stock for your cart");
      setIsUpdatingProduct(false);
      return;
    }
    productCtx.addProduct({
      code: code,
      productCountAvailable: stock.stockLevel - 1,
    });
    setItemPresentInCart(true);
  }

  function removeProductFromCart() {
    setIsUpdatingProduct(true);
    productCtx.removeProduct(code);

    const productQuantity = productCtx.isPresentProduct(code);
    setProductQuantity(productQuantity);
    if (productQuantity === 1) {
      setItemPresentInCart(false);
    }
  }

  useEffect(() => {
    setProductQuantity(productCtx.isPresentProduct(code));

    if (isUpdatingProduct) {
      setTimeout(() => {
        setIsUpdatingProduct(false);
      }, 500);
    }
  }, [setProductQuantity, productQuantity, isItemPresentInCart, cart]);

  return (
    <View style={styles.productButton}>
      {stock.stockLevel > 0 ? (
        <View style={styles.addToCartBtnOutterContainer}>
          <View
            style={
              isItemPresentInCart
                ? [styles.addToCartBtnInnerContainer, styles.pinkBorder]
                : styles.addToCartBtnInnerContainer
            }
          >
            {isItemPresentInCart ? (
              !isUpdatingProduct ? (
                <AddAndRevomeButton
                  addProductToCartProp={addProductToCart}
                  removeProductFromCartProp={removeProductFromCart}
                  quantity={productQuantity}
                />
              ) : (
                <Loader />
              )
            ) : !isUpdatingProduct ? (
              <AddToCartButton addProductToCartProp={addProductToCart0} />
            ) : (
              <Loader />
            )}
          </View>
        </View>
      ) : (
        <View style={styles.outOfStockContainer}>
          <Text style={styles.outOfStockText}>Out of stock</Text>
        </View>
      )}
    </View>
  );
}

export default ProductButton;

const styles = StyleSheet.create({
  productButton: {
    alignItems: "center",
  },

  addToCartBtnOutterContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },

  addToCartBtnInnerContainer: {
    borderWidth: 1,
    padding: 3,
    width: 154,
    flexDirection: "row",
    borderRadius: 20,
    height: 28,
    justifyContent: "center",
  },

  pinkBorder: {
    borderColor: GlobalStyles.colors.pink10,
  },

  btn: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.lightGrey70,
    alignItems: "center",
    justifyContent: "center",
  },

  outOfStockContainer: {
    top: 4,
  },

  outOfStockText: {
    color: GlobalStyles.colors.red,
    fontWeight: "bold",
    flex: 1,
    height: 30,
  },
});
