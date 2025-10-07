import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AddToCartButton({ addProductToCartProp }) {
  function addProductToCart() {
    addProductToCartProp();
  }

  return (
    <Pressable onPress={addProductToCart} style={styles.pressableComponent}>
      <View>
        <Ionicons name="cart-outline" size={18} />
      </View>

      <View>
        <Text> Add</Text>
      </View>
    </Pressable>
  );
}

export default AddToCartButton;

const styles = StyleSheet.create({
  addToCartBtnOutterContainer: {
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },

  addToCartBtnInnerContainer: {
    borderWidth: 1,
    padding: 3,
    width: 154,
    flexDirection: "row",
    borderRadius: 20,
  },

  pressableComponent: {
    borderRadius: 20,
    flex: 1,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    top: -3,
    flexDirection: "row",
  },
});
