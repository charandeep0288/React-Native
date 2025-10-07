import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet } from "react-native";

import GlobalStyles from "../../../constants/style";

function SaleSubCategoryItem({ code, name, altText, imageUrl, isLastItem }) {
  return (
    <View key={code} style={styles.saleSubCategoryItemContainer}>
      <View
        style={
          isLastItem
            ? styles.saleSubCategoryItemInnerContainer
            : [styles.saleSubCategoryItemInnerContainer, styles.BottomBorder]
        }
      >
        {code !== "000" ? (
          <View style={styles.itemImageContainer}>
            {imageUrl ? (
              <Image style={styles.itemImage} source={{ uri: imageUrl }} />
            ) : (
              <View>
                <Text>{altText}</Text>
              </View>
            )}
          </View>
        ) : (
          ""
        )}

        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>{name}</Text>
        </View>

        <View style={styles.chevronContainer}>
          <Ionicons
            style={styles.chevronIcon}
            name="chevron-forward-outline"
            size={22}
            color={GlobalStyles.colors.grey}
          />
        </View>
      </View>
    </View>
  );
}

export default SaleSubCategoryItem;

const styles = StyleSheet.create({
  saleSubCategoryItemContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    flex: 1,
  },

  saleSubCategoryItemInnerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 14,
  },

  itemNameContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingVertical: 16,
    marginTop: -5,
  },

  itemName: {
    fontSize: 12,
  },

  itemImageContainer: {
    // borderWidth: 1,
    // justifyContent: "center",
  },

  itemImage: {
    height: 40,
    width: 40,
  },

  chevronContainer: {
    // borderWidth: 1,
    justifyContent: "center",
  },

  BottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.lightGrey70,
  },
});
