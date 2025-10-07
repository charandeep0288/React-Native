import { View, Text, TextInput, StyleSheet } from "react-native";

import GlobalStyles from "../../constants/style";
import IconButton from "./IconButton";

function SearchBar() {
  return (
    <View style={styles.SearchBarContainer}>
      <View style={styles.SearchInputContainer}>
        <TextInput
          style={styles.SearchInput}
          placeholder="Search for products"
        />
      </View>
      <View style={styles.SearchButtonContainer}>
        <IconButton icon="search-outline" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBarContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: GlobalStyles.colors.lighterGrey,
  },

  SearchInputContainer: {
    width: 230,
    height: 35,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  SearchInput: {
    marginLeft: 12,
    marginTop: 3,
  },

  SearchButtonContainer: {
    width: 35,
    paddingTop: 4,
    paddingLeft: 6,
    backgroundColor: GlobalStyles.colors.lighterGrey,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default SearchBar;
