import { View, Text, StyleSheet } from "react-native";

import GlobalStyles from "../../constants/style";
import IconButton from "../UI/IconButton";

function Address() {
  return (
    <View style={stlyes.addressContainer}>
      <View style={stlyes.addressInnerContainer}>
        <IconButton icon="location-outline" size={20} />
        <View style={stlyes.addressTextContainer}>
          <Text>Erand Gradens Ext 94, 1682</Text>
        </View>
        <IconButton icon="chevron-down-outline" size={18} />
      </View>
    </View>
  );
}

export default Address;

const stlyes = StyleSheet.create({
  addressContainer: {
    backgroundColor: GlobalStyles.colors.lightGrey10,
    minHeight: 40,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.lighGrey20,
  },

  addressInnerContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  addressTextContainer: {
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});
