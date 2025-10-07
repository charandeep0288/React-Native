import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function ProductItem({
  code,
  name,
  url,
  description,
  stock,
  price,
  images,
  potentialPromotions,
  tags,
  mrp,
  margin,
  marginPercent,
  isProductAddedToWishlist,
  image,
  isProductNotified,
  isStoreOnly,
  isReturnable,
  promotionsCount,
  categoryL1,
  categoryL2,
  categoryL3,
  brand,
  giveAway,
  unitCode,
  variantValue,
}) {
  function selectProductHandler() {}

  console.log(image.url);
  return (
    <View style={styles.card}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={selectProductHandler}
      >

          <Image source={{uri: image.url}} />
        <View>
          <Text>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    height: 210,
    width: 175,
    borderWidth: 1,

    margin: 10,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4, // for shadow on Android

    // for shadow on iOS
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
