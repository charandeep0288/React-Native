import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

import GlobalStyles from "../../../constants/style";

function Address() {
  return (
    <View style={stlyes.addressContainer}>
      <View style={stlyes.addressInnerContainer}>
        <Ionicons name="location-outline" size={16} />
        <View style={stlyes.addressTextContainer}>
          <Text style={stlyes.addressText}>Erand Gradens Ext 94, 1682</Text>
        </View>
        <Ionicons name="chevron-down-outline" size={16} />
      </View>
    </View>
  );
}

export default Address;

const stlyes = StyleSheet.create({
  addressContainer: {
    backgroundColor: GlobalStyles.colors.lightGrey10,
    minHeight: 32,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.lighGrey20,
  },

  addressInnerContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 7,
  },

  addressTextContainer: {
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  addressText: {
    fontSize: 12,
  }
});