import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import GlobalStyles from "../../constants/style";

function AddAndRevomeButton({
  addProductToCartProp,
  removeProductFromCartProp,
  quantity,
}) {
  function addProductToCart() {
    addProductToCartProp();
  }
  function removeProductToCart() {
    removeProductFromCartProp();
  }

  return (
    <View style={styles.addRemoveBtnContainer}>
      <View>
        <Pressable
          style={styles.PressableComponent}
          onPress={removeProductToCart}
        >
          <View style={styles.btn}>
            <Ionicons name="remove-outline" size={16} />
          </View>
        </Pressable>
      </View>
      <View style={styles.productCountContainer}>
        <Text style={styles.productCount}>{quantity}</Text>
      </View>
      <View>
        <Pressable style={styles.PressableComponent} onPress={addProductToCart}>
          <View style={styles.btn}>
            <Ionicons name="add-outline" size={16} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default AddAndRevomeButton;

const styles = StyleSheet.create({
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
    borderColor: GlobalStyles.colors.pink10,
  },

  addRemoveBtnContainer: {
    flexDirection: "row",
    flex: 1,
  },

  btn: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.lightGrey70,
    alignItems: "center",
    justifyContent: "center",
  },

  productCountContainer: {
    flex: 1,
    alignItems: "center",
  },

  PressableComponent: {
    borderRadius: 20,
  },
});
