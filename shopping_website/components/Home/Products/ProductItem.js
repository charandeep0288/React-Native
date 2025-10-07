import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import GlobalStyles from "../../../constants/style";
import ProductButton from "./ProductButton";

function ProductItem({
  code,
  name,
  stock,
  price,
  mrp,
  margin,
  isProductAddedToWishlist,
  image,
  categoryL1,
  categoryL2,
  categoryL3,
  brand,
}) {
  function selectProductHandler() {}

  return (
    <View style={styles.card}>
      <View style={styles.saveTextAndLikeButtonContainer}>
        {margin.formattedValue ? (
          <View style={styles.saveTextContainer}>
            <Text style={styles.saveText}>Save </Text>
            <Text style={[styles.saveAmount, styles.saveText]}>
              {margin.formattedValue}
            </Text>
          </View>
        ) : (
          <View></View>
        )}
        <View style={styles.cardLikeIconContainer}>
          <Ionicons
            name={isProductAddedToWishlist ? "heart" : "heart-outline"}
            size={13}
            color={
              isProductAddedToWishlist
                ? GlobalStyles.colors.red
                : GlobalStyles.colors.grey
            }
          />
        </View>
      </View>

      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={selectProductHandler}
      >
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={{ uri: image }} />
        </View>
      </Pressable>

      <View style={styles.dummyView}></View>

      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={selectProductHandler}
      >
        <View style={styles.productNameContainer}>
          <Text numberOfLines={2} style={styles.productNameText}>
            {name}
          </Text>
        </View>
      </Pressable>

      <View style={styles.dummyView}></View>
      <View style={styles.dummyView}></View>

      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.currentPriceText}>{price.formattedValue}</Text>
        </View>

        <View>
          <Text style={styles.mrpText}>{mrp.formattedValue}</Text>
        </View>
      </View>

      <View style={styles.dummyView}></View>

      <View style={styles.cardbtn}>
        <ProductButton code={code} stock={stock} />
      </View>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    height: 370,
    width: 170,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.lighGrey50,
    margin: 10,
    borderRadius: 4,
    backgroundColor: "white",
    padding: 6,
    margin: 3,
  },

  saveTextAndLikeButtonContainer: {
    flexDirection: "row",
    height: 24,
  },

  saveTextContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.pink20,
    padding: 4,
  },

  saveText: {
    fontSize: 10,
    color: GlobalStyles.colors.pink10,
  },

  saveAmount: {
    fontWeight: "bold",
  },

  cardLikeIconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  cardImageContainer: {
    paddingVertical: 8,
    alignItems: "center",
    height: 140,
  },

  cardImage: {
    height: 100,
    width: 100,
  },

  dummyView: {
    width: 170,
    height: 20,
  },

  productNameContainer: {
    height: 40,
  },

  productNameText: {
    fontSize: 12,
    color: GlobalStyles.colors.grey,
  },

  priceContainer: {
    justifyContent: "flex-end",
  },

  currentPriceText: {
    fontSize: 13,
    color: GlobalStyles.colors.pink10,
    fontWeight: "bold",
  },

  mrpText: {
    fontSize: 11,
    color: GlobalStyles.colors.grey,
    textDecorationLine: "line-through",
  },

  cardbtn: {
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.lighGrey20,
    flex: 1,
    paddingTop: 6,
  },
});
