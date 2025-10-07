import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

import GlobalStyles from "../../../constants/style";

function SaleCategoryItem({
  code,
  name,
  altText,
  imageUrl,
  selectedSaleCategory,
  selectedCode,
}) {
  function selectSaleCategoryItemHandler() {
    selectedSaleCategory(code);
  }

  return (
    <Pressable
      key={code}
      android_ripple={{ color: "#ccc" }}
      onPress={selectSaleCategoryItemHandler}
    >
      <View
        style={
          code === selectedCode
            ? [styles.saleCategoryItemContainer, styles.selectedItem]
            : styles.saleCategoryItemContainer
        }
      >
        <View
          style={
            code === selectedCode
              ? [styles.imageContainer, styles.selectedItem0]
              : styles.imageContainer
          }
        >
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.saleCategoryItemNameContainer}>
          <Text style={styles.saleCategoryItemName}>{name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default SaleCategoryItem;

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  saleCategoryItemContainer: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    height: 136,
  },

  imageContainer: {
    // borderLeftWidth: 2,
    // borderColor: GlobalStyles.colors.pink10,
    flex: 1,
    width: (WIDTH * 0.9) / 3,
    padding: 8,
    alignItems: "center",
  },

  image: {
    height: 55,
    width: 55,
  },

  saleCategoryItemNameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  saleCategoryItemName: {
    fontSize: 12,
    textAlign: "center",
  },

  selectedItem: {
    backgroundColor: GlobalStyles.colors.white,
  },

  selectedItem0: {
    borderLeftWidth: 2,
    borderColor: GlobalStyles.colors.pink10,
  },
});
