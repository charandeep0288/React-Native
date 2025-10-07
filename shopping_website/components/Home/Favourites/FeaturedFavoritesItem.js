import { View, StyleSheet, Image } from "react-native";

function FeaturedFavouritesItem({ code, altText, url }) {
  return (
    <View key={code} style={styles.featuredFavouritesItem}>
      <Image
        style={styles.featuredFavouritesImage}
        source={{ uri: url }}
      />
    </View>
  );
}

export default FeaturedFavouritesItem;

const styles = StyleSheet.create({
    featuredFavouritesItem: {
        margin: 10,
      },
    
      featuredFavouritesImage: {
        height: 165,
        width: 150,
      },
})