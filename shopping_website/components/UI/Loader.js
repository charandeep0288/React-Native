import { View, StyleSheet, ActivityIndicator } from "react-native";

function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={GlobalStyles.colors.pink30} />
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: "center",
  },
});
