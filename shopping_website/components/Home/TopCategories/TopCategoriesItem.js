import { View, Text, Image, StyleSheet } from "react-native";

function TopCategoriesItem({ code, altText, name, imageUrl }) {
  return (
    <View style={styles.topCategoriesItem}>
      <View>
        <Image
          style={styles.topCategoriesItemImage}
          source={{
            uri: imageUrl,
          }}
          alt={altText} // TODO: don't know if it is working or not
        />
      </View>
      <View style={styles.topCategoriesItemTextContiner}>
        <Text style={styles.topCategoriesItemText}>{name}</Text>
      </View>
    </View>
  );
}

export default TopCategoriesItem;

const styles = StyleSheet.create({
  topCategoriesItem: {
    marginHorizontal: 5,
    width: 70,
    alignItems: "center",
  },

  topCategoriesItemImage: {
    width: 55,
    height: 55,
  },

  topCategoriesItemTextContiner: {
    paddingVertical: 5,
  },

  topCategoriesItemText: {
    fontSize: 10,
    textAlign: "center",
  },
});
