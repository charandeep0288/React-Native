import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return (
    //   {/* we are just looping over the ingredients instead of using <Flatlist>, because we can have max ingredients upto 10 or 12, so it doesn't matter if we use <FlatList> */}
    data.map((dataPoint) => (
      <View key={dataPoint} style={styles.listItem}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    ))
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
