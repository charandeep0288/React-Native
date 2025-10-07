import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  FlatList,
} from "react-native";

import GlobalStyles from "../../../constants/style";
import FeaturedFavouritesItem from "./FeaturedFavoritesItem";

function FeaturedFavourites({ topDiscountsdata }) {
  function renderFeatureFavourites(itemData) {
    const item = itemData.item;

    const featuredFavouritesProps = {
      code: item.code,
      altText: item.altText,
      url: item.url,
    };

    return <FeaturedFavouritesItem {...featuredFavouritesProps} />;
  }

  return (
    <View style={styles.featuredFavourites}>
      <View style={styles.featuredFavouritesInnerContiner}>
        <View>
          <Text style={styles.featuredFavouritesText}>Featured favourites</Text>
        </View>

        <View style={styles.featuredFavouritesItems}>
          <FlatList
            data={topDiscountsdata}
            keyExtractor={(item) => item.code}
            renderItem={renderFeatureFavourites}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
}

export default FeaturedFavourites;

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  featuredFavourites: {
    backgroundColor: GlobalStyles.colors.white,
    height: 450,
    width: WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  featuredFavouritesInnerContiner: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.lightGrey30,
    height: 410,
    maxWidth: WIDTH - 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  featuredFavouritesText: {
    fontSize: 13,
  },

  featuredFavouritesItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
