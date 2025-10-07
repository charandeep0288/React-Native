import { FlatList } from "react-native";
import { View, Image, Text, StyleSheet } from "react-native";

import TopCategoriesItem from "./TopCategoriesItem";
import GlobalStyles from "../../../constants/style";

function TopCategoriesList({ topCategoriesdata }) {
  function renderTopCategoriesItem(itemData) {
    const item = itemData.item;

    const TopCategoriesProps = {
      code: item.uid,
      name: item.mediaText,
      altText: item.altText,
      imageUrl: item.url,
    };

    return <TopCategoriesItem {...TopCategoriesProps} />;
  }

  return (
    <View style={styles.topCategoriesList}>
      <FlatList
        data={topCategoriesdata}
        keyExtractor={(item) => item.code}
        renderItem={renderTopCategoriesItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default TopCategoriesList;

const styles = StyleSheet.create({
  topCategoriesList: {
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.white,
  }
});
