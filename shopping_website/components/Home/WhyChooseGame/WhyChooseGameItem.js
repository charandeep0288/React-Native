import { View, Text, Dimensions, Image, StyleSheet } from "react-native";

function WhyChooseGameItem({ index, title, description, url, length }) {
  return (
    <View
      key={title}
      style={
        index < length - 1
          ? [styles.whyChooseGameItemContiner, styles.BottomBorder]
          : styles.whyChooseGameItemContiner
      }
    >
      <View style={styles.whyChooseGameItemImageContiner}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </View>
      <View style={styles.whyChooseGameItem}>
        <View style={styles.whyChooseGameItemTitleContainer}>
          <Text style={styles.whyChooseGameItemTitle}>{title}</Text>
        </View>
        <View>
          <Text style={styles.whyChooseGameItemDescription}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

export default WhyChooseGameItem;

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  BottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.lightGrey10,
  },

  whyChooseGameItemContiner: {
    flexDirection: "row",
  },

  whyChooseGameItem: {
    margin: 6,
    flex: 1,
    flexWrap: "wrap",
  },

  whyChooseGameItemTitle: {
    fontSize: 11,
  },

  whyChooseGameItemTitleContainer: {
    paddingBottom: 5,
  },

  whyChooseGameItemDescription: {
    fontSize: 11,
    maxWidth: WIDTH,
  },

  whyChooseGameItemImageContiner: {
    justifyContent: "center",
  },

  image: {
    height: 45,
    width: 45,
  },
});
